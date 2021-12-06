import { Component, OnDestroy, OnInit } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { CustomerService, EventBusService } from '../core/services';
import { ApplicationEventType } from '../enums/shared';
import { Customer } from '../models/customer';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-customers',
  template: `<fm-customer-grid
    [customerList]="customerList"
    (add)="add()"
  ></fm-customer-grid>`,
})
export class CustomersComponent implements OnInit, OnDestroy {
  customerList!: Customer[];
  private _getCustomerListSubscription!: Subscription;
  private _listenToCustomerRemovalEventSubscription!: Subscription;
  private readonly _subSink = new SubSink();

  constructor(
    private readonly _customerService: CustomerService,
    private readonly _eventBus: EventBusService
  ) {}

  ngOnInit(): void {
    this._subSink.sink = this._customerService.customerListChanged$ // .getAll()
      .subscribe({
        next: (resp) => {
          this.customerList = resp;
        },
      });

    this._subSink.sink = this._eventBus.on(
      ApplicationEventType.RemoveCustomer,
      (id: any) => {
        this.customerList = this._customerService.remove(id);
      }
    );
  }

  ngOnDestroy(): void {
    this._subSink.unsubscribe();
    // this._listenToCustomerRemovalEventSubscription.unsubscribe();
  }

  add() {
    this._customerService.addOb();
  }
}
