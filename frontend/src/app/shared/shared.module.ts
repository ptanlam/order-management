import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material';
import { AddTaxPipe } from './add-tax.pipe';

@NgModule({
  declarations: [AddTaxPipe],
  exports: [MaterialModule, RouterModule, CommonModule, AddTaxPipe],
})
export class SharedModule {}
