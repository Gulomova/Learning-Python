/* Theater service */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import {ApiService} from './api.service';
import {Theater} from '../_models/theater';


@Injectable()
export class TheaterService {
  private theater = new BehaviorSubject(null);

  constructor(private http: ApiService) { }

  getTheater(): BehaviorSubject<any> {
    /*
     Get information about the theater
     :return:
     */
    this.refreshTheater();
    return this.theater;
  }

  refreshTheater(): void {
    /*
     Refresh information about the theater
     */
    this.http.get('theater/')
      .map((response: Response) => { return response.json();})
      .catch((error: any) => {
        this.setTheater(null);
        return Observable.throw(error);})
      .subscribe((data: Response) => { this.setTheater(data[0]);});
  }

  setTheater(theater: Theater) {
    /*
     Set information about the theater
     :return:
     */
    this.theater.next(theater);
  }
}
