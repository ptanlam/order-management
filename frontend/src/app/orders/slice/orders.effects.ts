import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';
import { ordersActions } from '.';
import { OrderService } from '../../core/services';

@Injectable()
export class OrdersEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _orderService: OrderService
  ) {}

  loadOrderList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ordersActions.getOrderList),
      mergeMap(() =>
        this._orderService
          .getAll()
          .pipe(map((orders) => ordersActions.getOrderListSuccess({ orders })))
      )
    )
  );

  addOrder$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ordersActions.addOrder),
      switchMap(({ dto }) =>
        this._orderService
          .add(dto)
          .pipe(map((order) => ordersActions.addOrderSuccess({ order })))
      )
    )
  );

  removeOrder$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ordersActions.removeOrder),
      switchMap(({ id }) =>
        this._orderService
          .remove(id)
          .pipe(map(() => ordersActions.removeOrderSuccess({ id })))
      )
    )
  );
}
