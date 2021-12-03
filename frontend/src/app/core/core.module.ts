import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared';
import { NavbarComponent } from './navbar';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Customers and Orders Management',
    }),
    EffectsModule.forRoot([]),
  ],
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
