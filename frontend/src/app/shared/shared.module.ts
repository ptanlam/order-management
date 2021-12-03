import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material';

@NgModule({
  declarations: [],
  exports: [MaterialModule, RouterModule, CommonModule],
})
export class SharedModule {}
