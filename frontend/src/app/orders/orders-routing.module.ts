import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderGridComponent } from './order-grid/order-grid.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
  static components = [OrdersComponent, OrderGridComponent, OrderCardComponent];
}
