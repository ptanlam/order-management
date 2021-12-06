import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { name } from 'faker';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { EventBusService } from '../core/services';
import { ApplicationEventType } from '../enums/shared';
import { Order } from '../models';
import { getOrderListSelector, ordersActions, State } from './slice';
@Component({
  selector: 'fm-orders',
  template: ` <fm-order-grid [orderList]="orderList$ | async" (add)="add()">
  </fm-order-grid>`,
})
export class OrdersComponent implements OnInit, OnDestroy {
  private readonly _sub = new SubSink();
  orderList$!: Observable<Order[]>;

  constructor(
    private readonly _store: Store<State>,
    private readonly _eventBus: EventBusService
  ) {}

  ngOnInit(): void {
    this._store.dispatch(ordersActions.getOrderList());
    this.orderList$ = this._store.select(getOrderListSelector);
    this._sub.sink = this._eventBus.on(
      ApplicationEventType.RemoveOrder,
      (id: any) => this._store.dispatch(ordersActions.removeOrder({ id }))
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
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
