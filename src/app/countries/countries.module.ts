import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CountriesRoutingModule} from './countries-routing.module';
import {SharedModule} from '../shared/shared.module';

import {CapitalPageComponent} from './pages/capital-page/capital-page.component';
import {CountryPageComponent} from './pages/country-page/country-page.component';
import {CountryPageIdComponent} from './pages/country-page-id/country-page-id.component';
import {RegionPageComponent} from './pages/region-page/region-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import {RouterLink} from '@angular/router';

@NgModule({
  declarations: [
    CapitalPageComponent,
    CountryPageComponent,
    CountryPageIdComponent,
    RegionPageComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    RouterLink
  ],
})
export class CountriesModule {
}
