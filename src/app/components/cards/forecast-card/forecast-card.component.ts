import {Component, Input, OnInit} from '@angular/core';
import {WeatherForecast} from '../../../classes/weather-forecast';
import {DateTimeWorker} from '../../../workers/date-time/date-time.worker';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css']
})
export class ForecastCardComponent implements OnInit {
  @Input() weatherForecast: WeatherForecast;

  constructor(public dateTimeWorker: DateTimeWorker) { }

  ngOnInit() {
  }

}
