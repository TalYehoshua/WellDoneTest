import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AllLocationsComponent } from './components/all-locations/all-locations.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { FourZeroFourComponent } from './components/four-zero-four/four-zero-four.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'location', component: AllLocationsComponent },
  { path: 'addCategory', component: AllCategoriesComponent },
  { path: 'locationDetails/:id', component: LocationDetailsComponent },
  { path: 'categoryDetails/:id', component: CategoryDetailsComponent },
  { path: '**', component: FourZeroFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
