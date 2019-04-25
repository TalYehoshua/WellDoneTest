import { Component, OnInit } from '@angular/core';
import { MyLocation } from '../../interfaces/Location';
import { MainService } from '../../services/main.service';
import { Category } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-all-locations',
  templateUrl: './all-locations.component.html',
  styleUrls: ['./all-locations.component.css']
})
export class AllLocationsComponent implements OnInit {
  // initializations
  myLocations = [];
  categories: Category[] = [];
  title = 'All Locations';
  selectedLocation: MyLocation = {
    name: '',
    address: '',
    coordinatesLat: 0,
    coordinatesLng: 0,
    category: '',
    uniqueNumber: 0
  };
  editState = false;
  theNumber = 0;
  displayForm = false;
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.categories = this.mainService.getCategories();
    const def = { name: 'All Categories', uniqueNumber: -1 };
    this.categories.unshift(def);
    this.myLocations = this.mainService.getMyLocations();
    this.getNumber();
  }
  getNumber() {
    this.myLocations.forEach(element => {
      this.theNumber++;
      const uniqueNumber = this.theNumber;
      element.uniqueNumber = uniqueNumber;
    });
  }

  onSubmit(thePost: Location) {
    this.displayForm = false;
    this.myLocations.unshift(thePost);

    // Add to LS
    localStorage.setItem(
      'myLocations',
      JSON.stringify(this.myLocations)
    );
    this.myLocations = this.mainService.getMyLocations();
    this.theNumber = 0;
    this.getNumber();
    this.newCategory();
  }
  editMyLocation(myLocation: MyLocation) {
    this.title = 'Edit Location';
    this.displayForm = true;
    this.selectedLocation = myLocation;
    this.editState = true;
  }
  onEdited(thePost: MyLocation) {
    this.myLocations.forEach((current, index) => {
      if (thePost.name === current.name) {
        this.myLocations.splice(index, 1);
        this.myLocations.unshift(thePost);
        this.newCategory();
      }
    });
    // Add to LS
    localStorage.setItem(
      'myLocations',
      JSON.stringify(this.myLocations)
    );
    // get unique number
    this.theNumber = 0;
    this.myLocations = this.mainService.getMyLocations();
    this.getNumber();
    this.displayForm = false;
  }
  deleteMyLocation(thePost: MyLocation) {
    if (confirm('Would you like to delete this locationDetails?')) {
      this.myLocations.forEach((current, index) => {
        if (thePost.name === current.name) {
          this.myLocations.splice(index, 1);
        }
      });
    }
    // Add to LS
    localStorage.setItem(
      'myLocations',
      JSON.stringify(this.myLocations)
    );
    // get unique number
    this.theNumber = 0;
    this.getNumber();
  }


  displayForms(display) { // A function that helps one of the variables after changing the ls
    this.newCategory();
    if (display === 'AddLocation') {
      if (this.categories.length === 1 && this.categories[0].name === 'All Categories') {
        alert('To add a location you must add at least 1 category before');
        return;
      }
      this.displayForm = true;
      this.title = 'Add Location';
    } else if (display === 'AllLocations') {
      this.displayForm = false;
      this.title = 'All Locations';
    }
  }
  newCategory() {
    this.editState = false;
    this.title = 'All Locations';
    this.selectedLocation = {
      name: '',
      address: '',
      coordinatesLat: 0,
      coordinatesLng: 0,
      category: '',
      uniqueNumber: 0
    };
  }

  vibrate() {
    window.navigator.vibrate(400); // vibrate for 400ms
  }

}
