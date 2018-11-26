import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';
import {GoogleLocation} from '../../classes/GoogleLocation';

@Component({
  selector: 'app-maps-page',
  templateUrl: './maps-page.component.html',
  styleUrls: ['./maps-page.component.css']
})
export class MapsPageComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public zoom: number;

  constructor(
  ) {}

  ngOnInit() {
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    // load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {
    //   this.latitude = place.geometry.location.lat();
    //   this.longitude = place.geometry.location.lng();
    //   this.zoom = 12;
    // });
  }

  changeCoordinate(location: GoogleLocation) {
      this.latitude = location.lat;
      this.longitude = location.lng;
      this.zoom = 12;
  }

}
