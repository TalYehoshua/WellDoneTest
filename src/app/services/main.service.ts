import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  // in this service have 2 main functions the get the location and categories from local storage
  myLocations = [];
  categories = [];
  constructor() {
    this.getMyLocations();
    this.getCategories();
  }
  getMyLocations() {
    if (localStorage.getItem('myLocations') === null) {
      this.myLocations = [];
    } else {
      this.myLocations = JSON.parse( localStorage.getItem('myLocations'));
      this.myLocations.sort((a, b) => a.name.localeCompare(b.name));
    }
    return this.myLocations;
  }
  getCategories() {
    if (localStorage.getItem('categories') === null) {
      this.categories = [];
    } else {
      this.categories = JSON.parse(
        localStorage.getItem('categories')
      );
    }
    return this.categories;
  }
}
