import {Component, Input, OnInit} from '@angular/core';
import {GoogleLocation} from '../../../classes/GoogleLocation';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  @Input() public latitude: number;
  @Input() public longitude: number;
  @Input() public zoom: number;

  constructor(
    private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {

    // set current position
    this.setCurrentPosition();
  }

  mouseWheelUpFunc(event) {
    this.zoom++;
  }

  mouseWheelDownFunc(event) {
    this.zoom--;
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

}
