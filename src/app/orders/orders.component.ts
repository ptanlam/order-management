import { Component } from '@angular/core';
import { OrderService } from '../core/services';

@Component({
  selector: 'fm-orders',
  template: `<fm-order-grid></fm-order-grid>`,
  styles: [],
})
export class OrdersComponent {
  constructor(private readonly _orderService: OrderService) {}
}
