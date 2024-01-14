import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CountriesRoutingModule} from './countries-routing.module';

import {CapitalPageComponent} from './pages/capital-page/capital-page.component';
import {RegionPageComponent} from './pages/region-page/region-page.component';
import {CountryPageComponent} from './pages/country-page/country-page.component';
import {CountryPageIdComponent} from './pages/country-page-id/country-page-id.component';

@NgModule({
  declarations: [
    CapitalPageComponent,
    RegionPageComponent,
    CountryPageComponent,
    CountryPageIdComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule {
}
