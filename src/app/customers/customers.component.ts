import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from '../core/services';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  customerList!: Customer[];
  private _getCustomerListSubscription!: Subscription;

  constructor(private readonly _customerService: CustomerService) {}

  ngOnInit(): void {
    this._getCustomerListSubscription = this._customerService
      .getAll()
      .subscribe({
        next: (resp) => (this.customerList = resp),
      });
  }

  ngOnDestroy(): void {
    this._getCustomerListSubscription.unsubscribe();
  }

  add() {
    this._customerService.add();
  }
}
