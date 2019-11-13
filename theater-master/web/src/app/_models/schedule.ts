import {Performance} from "./performance";


export class Schedule {
  pk: string;
  performance: Performance;
  date_time: any;
  city: string;
  addresses: string;
  ticket: string;
}

export class ScheduleFilter {
  date_since: string;
  date_before: string;
  city: string;
}
