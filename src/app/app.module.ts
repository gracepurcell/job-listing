import { Workingset } from './workingset';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TableComponent } from './components/table/table.component';
import { JobListingComponent } from './routes/job-listing/job-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutocompleteComponent,
    TableComponent,
    JobListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ Workingset],
  bootstrap: [AppComponent]
})
export class AppModule { }
