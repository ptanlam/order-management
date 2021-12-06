import { createAction, props } from '@ngrx/store';
import { Order } from '../../models';

export const getOrderList = createAction('[Orders] Get orders');
export const getOrderListSuccess = createAction(
  '[Orders] Get orders success',
  props<{ orders: Order[] }>()
);
export const getOrderListFailure = createAction('[Orders] Get orders failure');

export const addOrder = createAction(
  '[Orders] Add order',
  // https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype
  props<{ dto: Omit<Order, 'id'> }>()
);
export const addOrderSuccess = createAction(
  '[Orders] Add order success',
  props<{ order: Order }>()
);
export const addOrderFailure = createAction('[Orders] Add order Failure');

export const removeOrder = createAction(
  '[Orders] Remove order',
  props<{ id: number }>()
);
export const removeOrderSuccess = createAction(
  '[Orders] Remove order success',
  props<{ id: number }>()
);
