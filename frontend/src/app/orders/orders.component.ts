import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { name } from 'faker';
import { Observable } from 'rxjs';
import { Order } from '../models';
import { getOrderListSelector, ordersActions, State } from './slice';
@Component({
  selector: 'fm-orders',
  template: ` <fm-order-grid [orderList]="orderList$ | async" (add)="add()">
  </fm-order-grid>`,
})
export class OrdersComponent implements OnInit {
  orderList$!: Observable<Order[]>;

  constructor(private readonly _store: Store<State>) {}

  ngOnInit(): void {
    this._store.dispatch(ordersActions.getOrderList());
    this.orderList$ = this._store.select(getOrderListSelector);
  }

  add() {
    this._store.dispatch(
      ordersActions.addOrder({
        dto: {
          customerName: `${name.firstName()} ${name.lastName()}`,
          price: 500_000,
          numberOfItems: 2,
        },
      })
    );
  }
}
