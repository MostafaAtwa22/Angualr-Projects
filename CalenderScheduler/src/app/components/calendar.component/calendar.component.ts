import { Component, computed, input, signal, Signal, WritableSignal } from '@angular/core';
import { DateTime, Info, Interval } from 'luxon';
import { IMeeting } from '../../interfaces/meeting';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-calendar',
  imports: [NgClass],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  constructor() {
    console.log(this.daysOfMonth());
  }
  meetings = input.required<IMeeting>();
  today: Signal<DateTime> = signal(DateTime.now());
  firstDayOfActiveMonth: WritableSignal<DateTime> = signal(this.today().startOf('month'));
  weekDays: Signal<string[]> = signal(Info.weekdays('short'));
  daysOfMonth: Signal<DateTime[]> = computed(() => {
    return Interval.fromDateTimes(
      this.firstDayOfActiveMonth().startOf('week'),
      this.firstDayOfActiveMonth().endOf('month').endOf('week')
    ).splitBy({ days: 1 })
    .map((d) => {
      if (d.start === null)
        throw new Error('Invalid interval');
      return d.start;
    });
  });
  activeDay = signal<DateTime | null>(null);
  activeDayMeetings : Signal<string[]> = computed(() => {
    const activeDay = this.activeDay();
    if (activeDay === null) {
      return [];
    }
    const activeDayISO = activeDay.toISODate();
    if (activeDayISO === null) {
      return [];
    }
    return this.meetings()[activeDayISO] ?? [];
  });
  DATE_MED = DateTime.DATE_MED;

  prevMonth() {
    this.firstDayOfActiveMonth.update((value) => value.minus({ month: 1 }));
  }

  nextMonth() {
    this.firstDayOfActiveMonth.update((value) => value.plus({ month: 1 }));
  }
}
