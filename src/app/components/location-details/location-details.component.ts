import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  // Page Information for a particular location
  myLocations = [];
  name: string;
  address: string;
  category: string;
  coordinatesLng: number;
  coordinatesLat: number;
  maps = true;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.displayPost();

  }
  displayPost() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.myLocations = this.mainService.getMyLocations();
    let elementId = 0;
    this.myLocations.forEach(element => {
      elementId++;
      if (elementId === id) {
        this.name = element.name;
        this.address = element.address;
        this.category = element.category;
        this.coordinatesLng = parseFloat(element.coordinatesLng);
        this.coordinatesLat = parseFloat(element.coordinatesLat);
      }
    });
  }

  option(maps) { // choose to see map or details
    if (maps === 'maps') {
      this.maps = false;
    } else {
      this.maps = true;
    }
  }
}
