import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [CustomersRoutingModule.components],
  imports: [SharedModule, CustomersRoutingModule],
})
export class CustomersModule {}
