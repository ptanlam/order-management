import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from '../models';
import { getOrderListSelector, ordersActions, State } from './slice';

@Component({
  selector: 'fm-orders',
  template: `<fm-order-grid [orderList]="orderList$ | async"></fm-order-grid>`,
})
export class OrdersComponent implements OnInit {
  orderList$!: Observable<Order[]>;

  constructor(private readonly _store: Store<State>) {}

  ngOnInit(): void {
    this._store.dispatch(ordersActions.getOrderList());
    this.orderList$ = this._store.select(getOrderListSelector);
  }
}
