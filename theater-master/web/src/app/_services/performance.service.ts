/* Performance service */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import {ApiService} from './api.service';


@Injectable()
export class PerformanceService {

  constructor(private http: ApiService,) {
  }

  getPerformances() {
    /*
     Get performances list.
     */
    return this.http.get('performance/')
      .map((response: Response) => {
        return response.json();
      });
  }

  getPerformance(pk: number) {
    /*
     Get performance.
     :param pk:
     */
    return this.http.get('performance/'+pk+'/')
      .map((response: Response) => {
        return response.json();
      });
  }
}
