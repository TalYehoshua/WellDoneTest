import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { MyLocation } from '../../interfaces/Location';
import { MainService } from 'src/app/services/main.service';
import { Category } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class DiscussionComponent implements OnInit {
  // initialization
  optionsSelect: Array<any>;
  @Input() selectedLocation: MyLocation;
  @Input() editState: boolean;
  @Output() sLocation: EventEmitter<MyLocation> = new EventEmitter();
  @Output() editMyLocationListener: EventEmitter<MyLocation> = new EventEmitter();
  @ViewChild('cForm') form: any;
  categories: Category[] = [];
  maps = false;
  latitude;
  longitude;
  locationChosen = false;

  constructor(private mainService: MainService) { }
  ngOnInit() {
    this.categories = this.mainService.getCategories();
  }

  submit({ value, valid }: { value: MyLocation; valid: boolean }) {
    if (!valid) {
    } else {
      this.form.reset();
    }
  }
  addLocation(name, address, coordinatesLat, coordinatesLng, category) { // pass the values to AllLocationComponent by the listenerl
    if (!name || !address || !coordinatesLat || !coordinatesLng || !category) {
      alert('Please enter all fields.');
    } else {
      const uniqueNumber = 0;
      const thePost: MyLocation = {
        name,
        address,
        coordinatesLat,
        coordinatesLng,
        category,
        uniqueNumber
      };
      this.sLocation.emit(thePost);
    }
  }
  updateLocation(name, address, coordinatesLat, coordinatesLng, category) {  // pass the values to AllLocationComponent by the listenerl
    const uniqueNumber = 0;
    const thePost: MyLocation = {
      name,
      address,
      coordinatesLat,
      coordinatesLng,
      category,
      uniqueNumber
    };
    this.editState = false;
    this.editMyLocationListener.emit(thePost);
    this.form.reset();
  }

  option(option) {
    if (option === 'maps') {
      this.maps = true;
    } else {
      this.maps = false;
    }
  }

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.latitude = event.coords.lng;
    this.locationChosen = true;
  }
}
