import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ordersActions, State } from './slice';

@Component({
  selector: 'fm-orders',
  template: `<fm-order-grid></fm-order-grid>`,
})
export class OrdersComponent implements OnInit {
  constructor(private readonly _store: Store<State>) {}

  ngOnInit(): void {
    this._store.dispatch(ordersActions.getOrderList());
  }
}
