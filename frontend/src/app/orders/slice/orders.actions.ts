import { createAction, props } from '@ngrx/store';
import { Order } from '../../models';

export const getOrderList = createAction('[Orders] Get orders');
export const getOrderListSuccess = createAction(
  '[Orders] Get orders success',
  props<{ orders: Order[] }>()
);
export const getOrderListFailure = createAction('[Orders] Get orders failure');
