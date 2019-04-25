import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  // Page Information for a particular category
  categories = [];
  name: string;

  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.displayPost();
  }
  displayPost() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categories = this.mainService.getCategories();
    let elementId = 0;
    this.categories.forEach(element => {
      elementId++;
      if (elementId === id) {
        this.name = element.name;
      }
    });
  }
}
