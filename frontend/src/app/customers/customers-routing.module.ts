import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerGridComponent } from './customer-grid';

const routes: Routes = [
  { path: '', component: CustomersComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {
  static components = [
    CustomerGridComponent,
    CustomersComponent,
    CustomerCardComponent,
  ];
}
