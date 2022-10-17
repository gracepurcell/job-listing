import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { JobListingComponent } from './routes/job-listing/job-listing.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'listing/:uuid', component: JobListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
