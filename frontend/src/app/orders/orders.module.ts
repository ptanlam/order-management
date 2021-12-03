import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderGridComponent } from './order-grid/order-grid.component';
import { OrderCardComponent } from './order-card/order-card.component';

@NgModule({
  declarations: [OrdersComponent, OrderGridComponent, OrderCardComponent],
  imports: [SharedModule, OrdersRoutingModule],
})
export class OrdersModule {}
