import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './shared/pages/home-page/home-page.component';
import {AboutPageComponent} from './shared/pages/about-page/about-page.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
