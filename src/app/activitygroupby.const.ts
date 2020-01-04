export class ActivityGroupBy {
  count: number;
  service: string;
  weekday: string;
  constructor(count: number, service: string, weekday: string) {
    this.count = count;
    this.service = service;
    this.weekday = weekday;
  }
}
