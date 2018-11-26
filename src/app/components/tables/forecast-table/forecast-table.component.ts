import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {WeatherForecast} from '../../../classes/weather-forecast';
import {DateTimeWorker} from '../../../workers/date-time/date-time.worker';

@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.css']
})
export class ForecastTableComponent implements OnInit, OnChanges {
  displayedColumns = ['Temperature', 'Weather', 'Time', 'Date'];
  dataSource: MatTableDataSource<WeatherForecast>;
  @Input() weatherForcastList: WeatherForecast[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dateTimeWorker: DateTimeWorker) { }

  ngOnInit() {
  }
  private setDataSoruce(weatherForecastList: WeatherForecast[]) {
    this.dataSource = new MatTableDataSource(weatherForecastList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.sort);
    console.log(this.paginator);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setDataSoruce(this.weatherForcastList);
  }

}
