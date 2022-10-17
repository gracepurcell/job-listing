import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from './services/jobs.service';

export interface JobListing {
  template_profession: string;
  template: string;
}
@Injectable()
export class Workingset {

  selectedJobUuid = null;
  selectedJob!: JobListing;
  searchResults = [];
  jobResults = [];

  constructor(private jobs: JobsService,
    private router: Router,
    private ngZone: NgZone) {

  }

  sendSearch(event: string) {
    console.log(event);
    this.jobs.getSearchResults(event).subscribe(results => {
      if (results) {
        this.searchResults = results;
      }
      console.log(results);
    });
  }

  searchForRole(event: string) {
    this.jobs.getJobListings(event).subscribe(results => {
      if (results) {
        this.jobResults = results.documents;
      }
      console.log(this.jobResults);
    });
  }

  getJobListing(uuid: string) {
    this.jobs.getJobListing(uuid).subscribe(result => {
      if (result) {
        this.selectedJob = result;
      }
      console.log(this.selectedJob);
    });
  }

  navigate(route: string) {
    this.ngZone.run(() => {
      this.router.navigate([route]);
    });
  }
}
