import {Component, OnInit} from '@angular/core';

import {TheaterService} from 'app/_services/theater.service';
import {Theater} from 'app/_models/theater';


@Component({
  selector: 'contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsComponent implements OnInit {
  theater: Theater;

  constructor( private theaterService: TheaterService ) {
    this.theaterService.getTheater()
      .subscribe(data => { this.theater = data;});
  }

  ngOnInit() { }

}
