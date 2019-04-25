import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DiscussionComponent } from './components/location-form/location-form.component';
import { AllLocationsComponent } from './components/all-locations/all-locations.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { MainService } from './services/main.service';
import { FourZeroFourComponent } from './components/four-zero-four/four-zero-four.component';
import { CategoryComponent } from './components/category/category.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomBarModule } from 'bottombar-component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    DiscussionComponent,
    AllLocationsComponent,
    LocationDetailsComponent,
    FourZeroFourComponent,
    CategoryComponent,
    AllCategoriesComponent,
    CategoryDetailsComponent,

  ],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BottomBarModule.forRoot(),
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDIrvhJOOY_xjbm3YqFU6OxqBKWIYIs9qo', // for googleMaps
    })
  ],
  providers: [ MainService],
  bootstrap: [AppComponent]
})
export class AppModule {}
