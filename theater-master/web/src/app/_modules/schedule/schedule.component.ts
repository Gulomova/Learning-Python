import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

import {Schedule, ScheduleFilter} from 'app/_models/schedule';
import {ScheduleService} from 'app/_services/schedule.service';


@Component({
  selector: 'schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  today = new Date();
  filterDate = new Date();
  cities = [{'id': 'KH', 'name': 'Харьков'},
    {'id': 'O', 'name': 'Одесса'}];
  filterCity = 'KH';
  scheduleFilter = new ScheduleFilter;
  dateFilterSize = 4;
  dateFilter = [];
  schedule: Schedule[];
  previousMonth = [];
  thisMonth = [];
  nextMonth = [];
  calendarSchedule = [];

  constructor(private datePipe: DatePipe,
              private scheduleService: ScheduleService) {
    this.getMonthsForFilter();
    this.getCalendar();
    this.getSchedule();
  }

  ngOnInit() { }

  getMonthsForFilter() {
    for (var _i = 0; _i < this.dateFilterSize; _i++) {
      this.dateFilter[_i] = new Date(this.today.getFullYear(), this.today.getMonth() + _i, 1);
    }
  }

  getDaysInPreviousMonth() {
    this.previousMonth = [];
    var firstDay = new Date(this.filterDate.getFullYear(), this.filterDate.getMonth(), 1);
    var firstWeekday = (firstDay.getDay() == 0 ? 7 : firstDay.getDay());
    for (var _i = 0; _i < firstWeekday - 1; _i++) {
      var date_time = new Date(this.filterDate.getFullYear(), this.filterDate.getMonth(), _i - (firstWeekday - 2));
      var weekday = (date_time.getDay()==6 || date_time.getDay()==0);
      var calendarDay = {
        'date_time': date_time,
        'weekday': weekday,
        'thisMonth': false
      };
      this.previousMonth[_i] = calendarDay;
    }
  }

  getDaysInThisMonth() {
    this.thisMonth = [];
    var lastDayOfMonth = new Date(this.filterDate.getFullYear(), this.filterDate.getMonth()+1, 0);
    for (var _i = 0; _i < lastDayOfMonth.getDate(); _i++) {
      var date_time = new Date(this.filterDate.getFullYear(), this.filterDate.getMonth() , _i + 1);
      var today = this.datePipe.transform(date_time, 'y-MM-dd')==this.datePipe.transform(this.today, 'y-MM-dd');
      var weekday = (date_time.getDay()==6 || date_time.getDay()==0) && !today;
      var calendarDay = {
        'date_time': date_time,
        'today': today,
        'weekday': weekday,
        'performance': null,
        'thisMonth': true
      };
      this.thisMonth[_i] = calendarDay;
    }
  }

  getDaysInNextMonth() {
    this.nextMonth = [];
    var lastDay = new Date(this.filterDate.getFullYear(), this.filterDate.getMonth() + 1, 0);
    var lastWeekday = (lastDay.getDay() == 0 ? 7 : lastDay.getDay());
    for (var _i = 0; _i < 7 - lastWeekday; _i++) {
      var date_time = new Date(this.filterDate.getFullYear(), this.filterDate.getMonth() + 1 , _i + 1);
      var weekday = (date_time.getDay()==6 || date_time.getDay()==0);
      var calendarDay = {
        'date_time': date_time,
        'weekday': weekday,
        'thisMonth': false
      };
      this.nextMonth[_i] = calendarDay;
    }
  }

  getCalendar() {
    this.getDaysInPreviousMonth();
    this.getDaysInThisMonth();
    this.getDaysInNextMonth();
  }

  getSchedule() {
    this.calendarSchedule = [];
    this.scheduleFilter.date_since = this.datePipe.transform(new Date(this.filterDate.getFullYear(), this.filterDate.getMonth(), 1), 'y-MM-dd');
    this.scheduleFilter.date_before = this.datePipe.transform(new Date(this.filterDate.getFullYear(), this.filterDate.getMonth() + 1, 1), 'y-MM-dd');
    this.scheduleFilter.city = this.filterCity;
    this.scheduleService.getSchedule(this.scheduleFilter).subscribe(data => {
      this.schedule = data;
      for (var performance of this.schedule) {
        var date = new Date(performance.date_time);
        this.thisMonth[date.getDate() - 1]['performance'] = performance;
      }
      this.calendarSchedule = this.previousMonth.concat(this.thisMonth).concat(this.nextMonth);
    });
  }

  changeDateFilter(date) {
    this.filterDate = new Date(this.today.getFullYear(), this.today.getMonth() + date, 1);
    this.getCalendar();
    this.getSchedule();
  }

  changeCityFilter(date) {
    this.filterCity = date;
    this.getCalendar();
    this.getSchedule();
  }

}
