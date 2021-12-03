import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared';
import { NavbarComponent } from './navbar';

@NgModule({
  declarations: [NavbarComponent],
  imports: [SharedModule],
  exports: [NavbarComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule)
      throw new Error(
        `${CoreModule.name} is already loaded. Import it in the AppModule only`
      );
  }
}
