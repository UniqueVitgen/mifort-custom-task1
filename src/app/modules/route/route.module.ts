import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import {MapsPageComponent} from '../../pages/maps-page/maps-page.component';
import {WeatherPageComponent} from '../../pages/weather-page/weather-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'maps', pathMatch: 'full'},
  {path: 'maps', component: MapsPageComponent},
  {path: 'weather', component: WeatherPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RouteModule { }
