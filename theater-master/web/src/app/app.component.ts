import {Component} from '@angular/core';

import {TheaterService} from 'app/_services/theater.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private theaterService: TheaterService ) {
    this.theaterService.getTheater()
      .subscribe(data => { });
  }
}
