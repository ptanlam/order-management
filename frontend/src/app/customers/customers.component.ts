import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService, EventBusService } from '../core/services';
import { ApplicationEventType } from '../enums/shared';
import { Customer } from '../models/customer';

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

  constructor(
    private readonly _customerService: CustomerService,
    private readonly _eventBus: EventBusService
  ) {}

  ngOnInit(): void {
    this._getCustomerListSubscription = this._customerService
      .getAll()
      .subscribe({
        next: (resp) => {
          this.customerList = resp;
        },
      });

    this._listenToCustomerRemovalEventSubscription = this._eventBus.on(
      ApplicationEventType.RemoveCustomer,
      (id: any) => {
        this.customerList = this._customerService.remove(id);
      }
    );
  }

  ngOnDestroy(): void {
    this._getCustomerListSubscription.unsubscribe();
    this._listenToCustomerRemovalEventSubscription.unsubscribe();
  }

  add() {
    this.customerList = this._customerService.add();
  }
}
