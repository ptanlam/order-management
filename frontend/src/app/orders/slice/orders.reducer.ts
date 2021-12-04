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
  adding: boolean;
  error: boolean;
}

const initialState: OrdersState = {
  list: [],
  loading: false,
  adding: false,
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
  })),

  on(ordersActions.addOrder, (state) => ({ ...state, adding: true })),
  on(ordersActions.addOrderSuccess, (state, action) => ({
    ...state,
    adding: false,
    list: [...state.list, action.order],
  })),

  on(ordersActions.removeOrderSuccess, (state, action) => {
    const orderIndex = state.list.findIndex((o) => o.id === action.id);

    return {
      ...state,
      list: [
        ...state.list.slice(0, orderIndex),
        ...state.list.slice(orderIndex + 1),
      ],
    };
  })
);

const getOrdersFeatureState = createFeatureSelector<OrdersState>('orders');
export const getOrderListSelector = createSelector(
  getOrdersFeatureState,
  (state) => state.list
);
