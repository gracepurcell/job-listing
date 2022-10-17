import { Workingset } from './../../workingset';
import { SearchResults } from './../../services/dtos';
import { JobsService } from './../../services/jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchString = null;

  searchResult: SearchResults[] = [];

  jobResults = [];

  constructor(public ws: Workingset) { }

  ngOnInit(): void {
  }

  sendSearch(event: string) {
    this.ws.sendSearch(event);
  }

  searchForRole(event: string) {
    this.ws.searchForRole(event);
  }

  selectedIndex(event: any) {
    if (event) {
      this.ws.selectedJobUuid = event;
      this.ws.navigate('listing/' + this.ws.selectedJobUuid);
    }
  }

}
