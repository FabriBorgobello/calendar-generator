import ical from 'ical-generator';
import http from 'http';

import { data } from './config';
import { type CalendarData } from './types';

function createEventCalendar({ name, events }: CalendarData) {
  const calendar = ical({ name });

  events.forEach((event) => {
    calendar.createEvent({
      start: new Date(event.date),
      end: new Date(event.date),
      summary: event.name,
      allDay: true,
    });
  });

  return calendar;
}

const calendar = createEventCalendar(data);

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="calendar.ics"',
    });

    res.end(calendar.toString());
  })
  .listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
  });
