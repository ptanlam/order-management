import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material';

@NgModule({
  declarations: [],
  exports: [MaterialModule, RouterModule],
})
export class SharedModule {}
