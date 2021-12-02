import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { NavbarComponent } from './navbar';

@NgModule({
  declarations: [NavbarComponent],
  imports: [SharedModule],
  exports: [CommonModule, NavbarComponent],
})
export class CoreModule {}
