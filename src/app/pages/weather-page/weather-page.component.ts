import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {WeatherService} from '../../services/weather/weather.service';
import {GoogleLocation} from '../../classes/GoogleLocation';
import {WeatherResponse} from '../../classes/weather-response';
import {WeatherForecast} from '../../classes/weather-forecast';
import {DateTimeWorker} from '../../workers/date-time/date-time.worker';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit, AfterViewInit {
  public latitude: number;
  public longitude: number;
  public res: WeatherResponse;

  constructor(private weatherService: WeatherService,
              public dateTimeWorker: DateTimeWorker) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log('afterViewInit');
  }
  changeCoordinate(location: GoogleLocation) {
    this.latitude = location.lat;
    this.longitude = location.lng;
    this.weatherService.getByCoordinates(location).subscribe((res: WeatherResponse) => {
      console.log('res', res);
      this.res = res;
    });
  }

}
