import { Injectable } from '@angular/core';
import { Order } from '../../models';
import { name, datatype } from 'faker';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly _orders: Order[];

  constructor() {
    this._orders = [...new Array(20)].map((_, index) => ({
      id: index,
      customerName: `${name.firstName()} ${name.lastName()}`,
      price: datatype.number(),
      numberOfItems: datatype.number(3),
    }));
  }

  getAll() {
    return of(this._orders);
  }
}
