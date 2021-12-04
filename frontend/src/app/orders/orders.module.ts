import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersEffects, ordersReducer } from './slice';

@NgModule({
  declarations: [OrdersRoutingModule.components],
  imports: [
    SharedModule,
    OrdersRoutingModule,
    StoreModule.forFeature('orders', ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
  ],
})
export class OrdersModule {}
