import {Component, Input, OnInit} from '@angular/core';
import {WeatherForecast} from '../../../../classes/weather-forecast';

@Component({
  selector: 'app-forecast-card-dashboard',
  templateUrl: './forecast-card-dashboard.component.html',
  styleUrls: ['./forecast-card-dashboard.component.css']
})
export class ForecastCardDashboardComponent implements OnInit {
  @Input() weatherForecastList: WeatherForecast[];

  constructor() { }

  ngOnInit() {
  }

}
