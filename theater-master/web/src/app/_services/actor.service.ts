/* Actor service */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import {ApiService} from './api.service';


@Injectable()
export class ActorService {

  constructor(private http: ApiService,) {
  }

  getActors() {
    /*
     Get actors list.
     */
    return this.http.get('actor/')
      .map((response: Response) => {
        return response.json();
      });
  }
}
