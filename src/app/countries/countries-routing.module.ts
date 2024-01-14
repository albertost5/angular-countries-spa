import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CapitalPageComponent} from './pages/capital-page/capital-page.component';
import {CountryPageComponent} from './pages/country-page/country-page.component';
import {RegionPageComponent} from './pages/region-page/region-page.component';
import {CountryPageIdComponent} from './pages/country-page-id/country-page-id.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: CapitalPageComponent
  },
  {
    path: 'by-country',
    component: CountryPageComponent
  },
  {
    path: 'by-region',
    component: RegionPageComponent
  },
  {
    path: 'id/:countryId',
    component: CountryPageIdComponent
  },
  {
    path: '**',
    redirectTo: 'by-capital'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CountriesRoutingModule {
}
