import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderGridComponent } from './order-grid/order-grid.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrdersEffects, ordersReducer } from './slice';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [OrdersComponent, OrderGridComponent, OrderCardComponent],
  imports: [
    SharedModule,
    OrdersRoutingModule,
    StoreModule.forFeature('orders', ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
  ],
})
export class OrdersModule {}
