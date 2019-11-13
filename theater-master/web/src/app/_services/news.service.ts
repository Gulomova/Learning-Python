/* News service */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import {ApiService} from './api.service';


@Injectable()
export class NewsService {

  constructor(private http: ApiService,) {
  }

  getNews() {
    /*
     Get news.
     */
    return this.http.get('news/')
      .map((response: Response) => {
        return response.json();
      });
  }
}
