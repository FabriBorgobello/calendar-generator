export interface Event {
  date: string;
  name: string;
}

export interface CalendarData {
  name: string;
  events: Event[];
}
