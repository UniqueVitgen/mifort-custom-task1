import {WeatherForecast} from './weather-forecast';
import {City} from './city';

export class WeatherResponse {
  cod: number;
  message: number;
  cnt: number;
  list: WeatherForecast[];
  city: City;
}
