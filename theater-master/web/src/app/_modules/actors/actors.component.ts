import {Component, OnInit} from '@angular/core';

import {Actor} from 'app/_models/actor';
import {ActorService} from 'app/_services/actor.service';


@Component({
  selector: 'actors',
  templateUrl: 'actors.component.html',
  styleUrls: ['actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Actor[];

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actorService.getActors().subscribe(data => {
      this.actors = data;
    });
  }

}
