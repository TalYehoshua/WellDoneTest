import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  // initializations
  categories = [];
  selectedCategory: Category = {
    name: '',
    uniqueNumber: 0,
  };
  editState = false;
  theNumber = 0;
  displayForm = false;
  title = 'All Categories';

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.categories = this.mainService.getCategories();
    this.getNumber();
  }
  getNumber() {
    this.categories.forEach(element => {
      this.theNumber++;
      const uniqueNumber = this.theNumber;
      element.uniqueNumber = uniqueNumber;
    });
  }

  onSubmit(thePost: Category) { // when new post created
    for (let index = 0; index < this.categories.length; index++) {
      if (this.categories[index].name === thePost.name) {
        alert('this category alredy exsist');
        return;
      }
    }
    this.displayForm = false;
    this.categories.unshift(thePost);

    // Add to LS
    localStorage.setItem(
      'categories',
      JSON.stringify(this.categories)
    );
    // get unique number
    this.theNumber = 0;
    this.getNumber();
    this.newCategory();
  }
  editCategory(category: Category) {
    this.title = 'Edit Category';
    this.displayForm = true;
    this.selectedCategory = category;
    this.editState = true;
  }
  onEdited(thePost: Category) {
    let counter = 0;
    this.categories.forEach((current, index) => {
      if (thePost.name === current.name) {
        // this.categories.splice(index, 1);
        // this.categories.unshift(thePost);
        counter++;
      }
    });
    if (counter === 2) {
      alert('this category alredy exsist');
      this.newCategory();
      this.categories = this.mainService.getCategories();
      this.displayForm = false;
      return;
    }
    // Add to LS
    localStorage.setItem(
      'categories',
      JSON.stringify(this.categories)
    );
    // get unique number
    this.theNumber = 0;
    this.categories = this.mainService.getCategories();
    this.getNumber();
    this.displayForm = false;
    this.newCategory();

  }
  deleteCategory(thePost: Category) {
    if (confirm('Would you like to delete this locationDetails?')) {
      this.categories.forEach((current, index) => {
        if (thePost.name === current.name) {
          this.categories.splice(index, 1);
        }
      });
    }
    // Add to LS
    localStorage.setItem(
      'categories',
      JSON.stringify(this.categories)
    );
    // get unique number
    this.theNumber = 0;
    this.getNumber();
  }


  displayForms(display) { // A function that helps one of the variables after changing the ls
    this.newCategory();
    if (display === 'AddCategory') {
      this.title = 'Add Category';
      this.displayForm = true;
    } else if (display === 'AllCategories') {
      this.title = 'All Categories';
      this.displayForm = false;
    }
  }
  newCategory() {
    this.editState = false;
    this.title = 'All Categories';
    this.selectedCategory = {
      name: '',
      uniqueNumber: 0,
    };
  }
}
