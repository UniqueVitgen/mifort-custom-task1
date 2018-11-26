import {Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { } from 'googlemaps';
import {GoogleLocation} from '../../../classes/GoogleLocation';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-google-place-input',
  templateUrl: './google-place-input.component.html',
  styleUrls: ['./google-place-input.component.css']
})
export class GooglePlaceInputComponent implements OnInit {

  @ViewChild('search')
  public searchElementRef: ElementRef;
  public searchControl: FormControl;
  public coordinates: GoogleLocation;
  @Output() changeCoordinats: EventEmitter<GoogleLocation> = new EventEmitter();

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {

    // create search FormControl
    this.searchControl = new FormControl();
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.coordinates = new GoogleLocation(place.geometry.location.lat(), place.geometry.location.lng());
          console.log('this.coordinates', this.coordinates);

          this.changeCoordinats.emit(this.coordinates);

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
        });
      });
    });
  }

}
