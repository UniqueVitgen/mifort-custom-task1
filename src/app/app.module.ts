import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AgmCoreModule} from '@agm/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MouseWheelDirective } from './directives/mouse-wheel/mouse-wheel.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';
import { GooglePlaceInputComponent } from './components/inputs/google-place-input/google-place-input.component';
import { GoogleMapsComponent } from './components/google/google-maps/google-maps.component';
import {RouteModule} from './modules/route/route.module';
import {HttpClientModule} from '@angular/common/http';
import {AngularBootstrapModule} from './modules/angular-bootstrap/angular-bootstrap.module';
import {MaterialDesignModule} from './modules/material-design/material-design.module';
import { ForecastTableComponent } from './components/tables/forecast-table/forecast-table.component';
import { ForecastCardComponent } from './components/cards/forecast-card/forecast-card.component';
import { ForecastCardDashboardComponent } from './components/layouts/dashboards/forecast-card-dashboard/forecast-card-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseWheelDirective,
    NavbarComponent,
    WeatherPageComponent,
    MapsPageComponent,
    GooglePlaceInputComponent,
    GoogleMapsComponent,
    ForecastTableComponent,
    ForecastCardComponent,
    ForecastCardDashboardComponent
  ],
  imports: [
    RouteModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBP7-l4zKw-h45i2fUnBtC5GePrakCa7X4',
      libraries: ['places']
    }),
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
