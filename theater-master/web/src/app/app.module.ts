import {NgModule} from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpModule, JsonpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {NguiMapModule} from '@ngui/map';
import {CookieService} from 'angular2-cookie/core';
import {OrderModule} from 'ngx-order-pipe';

import {routes} from './app.routes';
import {AppComponent} from './app.component';

import {ActorsComponent} from './_modules/actors/actors.component';
import {FooterComponent} from './_modules/footer/footer.component';
import {ContactsComponent} from './_modules/contacts/contacts.component';
import {NavigationBarComponent} from './_modules/navigation-bar/navigation-bar.component';
import {NewsComponent} from './_modules/news/news.component';
import {PerformanceDetailComponent} from './_modules/performance-detail/performance-detail.component';
import {PerformancesComponent} from './_modules/performances/performances.component';
import {ScheduleComponent} from './_modules/schedule/schedule.component';
import {TheaterComponent} from './_modules/theater/theater.component';

import {PhonePipe} from './_pipes/phone-number.pipe';
import {DateMonthPipe, MonthPipe, MonthYearPipe, TimePipe, WeekDayPipe} from './_pipes/date.pipe';

import {ActorService} from './_services/actor.service';
import {ApiService} from './_services/api.service';
import {NewsService} from './_services/news.service';
import {PerformanceService} from './_services/performance.service';
import {ScheduleService} from './_services/schedule.service';
import {TheaterService} from './_services/theater.service';


@NgModule({
  declarations: [
    ActorsComponent,
    AppComponent,
    FooterComponent,
    ContactsComponent,
    NavigationBarComponent,
    NewsComponent,
    PerformanceDetailComponent,
    PerformancesComponent,
    ScheduleComponent,
    TheaterComponent,
    DateMonthPipe,
    MonthPipe,
    MonthYearPipe,
    PhonePipe,
    TimePipe,
    WeekDayPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FlexLayoutModule,
    JsonpModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDISexH71BVKntHpUmLofo_QbyhXgz5yao'}),
    OrderModule,
    RouterModule.forRoot(routes),
    LeafletModule.forRoot(),
  ],
  providers: [
    ActorService,
    ApiService,
    CookieService,
    NewsService,
    PerformanceService,
    ScheduleService,
    TheaterService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
