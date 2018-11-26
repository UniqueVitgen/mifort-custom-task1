import { Injectable } from '@angular/core';
import {GoogleLocation} from '../../classes/GoogleLocation';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {WeatherResponse} from '../../classes/weather-response';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  static apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  static appId = 'd46c1e8f5133268566fbfc7c2415d5ac';

  constructor(private http: HttpClient) { }

  getByCoordinates(coordinates: GoogleLocation): Observable<any> {
    return this.http.get(
      WeatherService.apiUrl + '?lat=' + coordinates.lat + '&lon=' + coordinates.lng
    + '&APPID=' + WeatherService.appId + '&units=metric');
  }
}
