import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Order } from '../../models';
import * as RootState from '../../app.state';
import { ordersActions } from '.';

export interface State extends RootState.State {
  orders: OrdersState;
}

export interface OrdersState {
  list: Order[];
  loading: boolean;
  error: boolean;
}

const initialState: OrdersState = {
  list: [],
  loading: false,
  error: false,
};

export const ordersReducer = createReducer<OrdersState>(
  initialState,
  on(ordersActions.getOrderList, (state) => ({
    ...state,
    loading: true,
  })),
  on(ordersActions.getOrderListSuccess, (state, action) => ({
    ...state,
    loading: false,
    list: action.orders,
  }))
);

const getOrdersFeatureState = createFeatureSelector<OrdersState>('orders');
export const getOrderList = createSelector(
  getOrdersFeatureState,
  (state) => state.list
);
