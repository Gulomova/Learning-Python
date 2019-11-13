import { Component, OnInit } from '@angular/core';

import {TheaterService} from 'app/_services/theater.service';
import {Theater} from 'app/_models/theater';


@Component({
  selector: 'theater',
  templateUrl: 'theater.component.html',
  styleUrls: ['theater.component.css']
})
export class TheaterComponent implements OnInit {
  theater: Theater;

  constructor( private theaterService: TheaterService ) {
    this.theaterService.getTheater()
      .subscribe(data => { this.theater = data;});
  }

  ngOnInit() { }

}
