import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { filter, map, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private httpClient: HttpClient) { }

  getHeaders() {

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    }

    const requestOptions = {
      headers: headers,
    };

    return requestOptions;
  }

  static readonly getSearchPath = '/api/v1/public/meta/typeahead?limit=5&query=';

  getSearchResults(search: string): Observable<any> {
    return new Observable((obs: Observer<any>) => {
      const options = this.getHeaders();
      this.httpClient.get(`${JobsService.getSearchPath + search}`, options).subscribe(results => {
        obs.next(results);
        obs.complete();
      })
    });
  }

  static readonly getJobListingsPath = '/api/v1/public/search?query=';

  getJobListings(jobTitle: string): Observable<any> {
    return new Observable((obs: Observer<any>) => {
      const options = this.getHeaders();
      this.httpClient.get(`${JobsService.getJobListingsPath + jobTitle + '&rows=20'}`, options).subscribe(results => {
        obs.next(results);
        obs.complete();
      })
    });
  }

  static readonly getJobListingPath = '/api/v1/public/search/job'

  getJobListing(uuid: string): Observable<any> {
    return new Observable((obs: Observer<any>) => {
      const options = this.getHeaders();
      this.httpClient.get(`${JobsService.getJobListingPath}/${uuid}`, options).subscribe(results => {
        obs.next(results);
        obs.complete();
      })
    });
  }


}
