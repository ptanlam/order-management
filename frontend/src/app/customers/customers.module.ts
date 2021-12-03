import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerGridComponent } from './customer-grid';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [
    CustomerGridComponent,
    CustomersComponent,
    CustomerCardComponent,
  ],
  imports: [CustomersRoutingModule, SharedModule],
})
export class CustomersModule {}
