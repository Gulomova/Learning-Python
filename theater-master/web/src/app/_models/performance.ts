import {Schedule} from "./schedule";

export class Actor {
  full_name: string;
}

export class Performance {
  pk: string;
  name: string;
  photo: string;
  actors: Actor[];
  producer: Actor[];
  duration: string;
  sort_description: string;
  description: string;
  schedule: Schedule;
}
