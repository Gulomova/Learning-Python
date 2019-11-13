import {Component, OnInit} from '@angular/core';

import {News} from 'app/_models/news';
import {NewsService} from 'app/_services/news.service';


@Component({
  selector: 'news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.news = data;
    });
  }

}
