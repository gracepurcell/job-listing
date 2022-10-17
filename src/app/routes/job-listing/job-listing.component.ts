import { Workingset } from './../../workingset';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})
export class JobListingComponent implements OnInit {

  uuidRoute = this.activatedRoute.snapshot.params['uuid'];

  constructor(private activatedRoute: ActivatedRoute,
    public ws: Workingset) { }

  ngOnInit(): void {
    if (this.uuidRoute) {
      this.ws.getJobListing(this.uuidRoute);
    }
  }

  backToList() {
    this.ws.navigate('home');
  }


}
