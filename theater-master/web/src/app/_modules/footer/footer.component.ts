import {Component, OnInit} from '@angular/core';

import {TheaterService} from 'app/_services/theater.service';
import {Theater} from 'app/_models/theater';


@Component({
  selector: 'footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent implements OnInit {
  theater: Theater;

  constructor( private theaterService: TheaterService ) {
    this.theaterService.getTheater()
      .subscribe(data => { this.theater = data;});
  }

  ngOnInit() { }

}
