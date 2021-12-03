import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { ordersActions } from '.';
import { OrderService } from '../../core/services';

@Injectable()
export class OrdersEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _orderService: OrderService
  ) {}

  orderList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ordersActions.getOrderList),
      mergeMap(() =>
        this._orderService
          .getAll()
          .pipe(map((orders) => ordersActions.getOrderListSuccess({ orders })))
      )
    )
  );
}
