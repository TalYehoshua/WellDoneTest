import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  // initializations
  @Input() selectedCategory: Category;
  @Input() editState: boolean;
  @Output() idCategory: EventEmitter<Category> = new EventEmitter();
  @Output() editCategoryListener: EventEmitter<Category> = new EventEmitter();
  @ViewChild('cForm') form: any;
  displayForm = false;

  constructor() { }

  ngOnInit() { }

  submit({ value, valid }: { value: Category; valid: boolean }) {
    if (!valid) {
    } else {
      this.form.reset();
    }
  }
  addCategory(name) {
    const uniqueNumber = 0;
    if (!name) {
      alert('Please enter all fields.');
    } else {
      const thePost: Category = {
        name,
        uniqueNumber,
      };
      this.idCategory.emit(thePost); // listener
    }
  }
  updateCategory(name) {
    const uniqueNumber = 0;
    const thePost: Category = {
      name,
      uniqueNumber
    };
    this.editState = false;
    this.editCategoryListener.emit(thePost); // listener
    this.form.reset();
  }
}
