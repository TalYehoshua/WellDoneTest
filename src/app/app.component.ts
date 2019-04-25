import { Component } from '@angular/core';
import {NavTab} from 'bottombar-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WellDone';

  tabs: NavTab[] = [{ // initialization the footer
    'title': 'Category',
    'icon': 'fa fa-cog',
    'link': '/addCategory',
    'state': 'unactive',
    'backgroundColor' : '#6A5ACD'
  },
    {'title': 'Location',
      'icon': 'fa fa-globe',
      'link': '/location',
      'state': 'unactive',
      'backgroundColor' : '#4682B4'},
      ];


}
