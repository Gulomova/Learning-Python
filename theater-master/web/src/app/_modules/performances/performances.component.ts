import { Component, OnInit } from '@angular/core';

import {Performance} from 'app/_models/performance';
import {PerformanceService} from 'app/_services/performance.service';


@Component({
  selector: 'performances',
  templateUrl: 'performances.component.html',
  styleUrls: ['performances.component.css']
})
export class PerformancesComponent implements OnInit {

  performances: Performance[];

  constructor(private performanceService: PerformanceService) { }

  ngOnInit() {
    this.performanceService.getPerformances().subscribe(data => {
      this.performances = data;
    });
  }

}
