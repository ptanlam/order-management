import { NgModule } from '@angular/core';
import { CoreModule } from '../core';
import { SharedModule } from '../shared';
import { CustomerGridComponent } from './customer-grid';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';

@NgModule({
  declarations: [CustomerGridComponent, CustomersComponent, CustomerCardComponent],
  imports: [CoreModule, CustomersRoutingModule, SharedModule],
})
export class CustomersModule {}
