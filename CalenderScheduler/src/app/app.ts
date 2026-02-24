import { Component, signal } from '@angular/core';
import { CalendarComponent } from './components/calendar.component/calendar.component';
import { IMeeting } from './interfaces/meeting';

@Component({
  selector: 'app-root',
  imports: [CalendarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('CalenderScheduler');
  meetings: IMeeting = {
    '2026-04-24': [
      'Dring Coffee',
      'Learn Angular',
      'Do Exercise',
      'Sleep'
    ],
    '2026-04-02': [
      'Dring Coffee',
      'Learn Asp.Net',
      'Do Exercise',
      'Sleep'
    ],
    '2026-04-22': [
      'Dring Coffee',
      'Learn Asp.Net',
      'Do Exercise',
      'Sleep'
    ],
    '2026-04-23': [
      'Dring Coffee',
      'Learn Asp.Net',
      'Do Exercise',
      'Sleep'
    ],
    '2026-04-25': [
      'Dring Coffee',
      'Learn Asp.Net',
      'Do Exercise',
      'Sleep'
    ],
    '2026-04-26': [
      'Dring Coffee',
      'Learn Asp.Net',
      'Do Exercise',
      'Sleep'
    ],
    '2026-04-27': [
      'Dring Coffee',
      'Learn Asp.Net',
      'Do Exercise',
      'Sleep'
    ],
    '2026-04-28': [
      'Dring Coffee',
      'Learn Asp.Net',
      'Do Exercise',
      'Sleep'
    ],
    '2026-04-29': [
      'Dring Coffee',
      'Learn Asp.Net',
      'Do Exercise',
      'Sleep'
    ],
    '2026-04-30': [
      'Dring Coffee',
      'Learn Asp.Net',
      'Do Exercise',
      'Sleep'
    ],
    '2026-04-01': [
      'Dring Coffee',
      'Learn Asp.Net',
      'Do Exercise',
      'Sleep'
    ]
  }
}
