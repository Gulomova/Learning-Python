import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Performance} from 'app/_models/performance';
import {PerformanceService} from 'app/_services/performance.service';


@Component({
  selector: 'performance-detail',
  templateUrl: 'performance-detail.component.html',
  styleUrls: ['performance-detail.component.css']
})
export class PerformanceDetailComponent implements OnInit {

  private routeSubscription: Subscription;
  performancePK: number;
  performance = new Performance;

  constructor(private performanceService: PerformanceService,
              private route: ActivatedRoute) {
    this.routeSubscription = route.params
      .subscribe(params => {
        this.performancePK = params['pk'];
        this.getPerformance();
      });
  }

  ngOnInit() { }

  getPerformance() {
    this.performanceService.getPerformance(this.performancePK).subscribe(data => {
      this.performance = data;
    });
  }

}
