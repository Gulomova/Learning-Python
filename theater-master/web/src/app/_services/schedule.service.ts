/* Schedule service */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import {ApiService} from './api.service';
import {ScheduleFilter} from '../_models/schedule';


@Injectable()
export class ScheduleService {

  constructor(private http: ApiService,) { }

  getSchedule(filter: ScheduleFilter) {
    /*
     Get schedule.
     :param filter:
     */
    var url = 'schedule/?date_since=' + (filter.date_since ? filter.date_since : '') +
        '&date_before=' + (filter.date_before ? filter.date_before : '') +
        '&city=' + (filter.city ? filter.city : '');
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
