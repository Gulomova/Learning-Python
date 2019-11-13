import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ActorsComponent} from './_modules/actors/actors.component';
import {ContactsComponent} from './_modules/contacts/contacts.component';
import {NewsComponent} from './_modules/news/news.component';
import {PerformanceDetailComponent} from './_modules/performance-detail/performance-detail.component';
import {PerformancesComponent} from './_modules/performances/performances.component';
import {ScheduleComponent} from './_modules/schedule/schedule.component';
import {TheaterComponent} from './_modules/theater/theater.component';

export const routes: Routes = [
  {path: 'performance', component: PerformancesComponent},
  {path: 'actors', component: ActorsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'performance/:pk', component: PerformanceDetailComponent},
  {path: 'news', component: NewsComponent},
  {path: 'theater', component: TheaterComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: '',redirectTo: 'performance',pathMatch: 'full'},
  {path: '**',redirectTo: 'performance',pathMatch: 'full'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
