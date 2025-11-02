import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  private dateText = {
    today: () => "Today",
    yesterday: () => "Yesterday",
    daysAgo: (days: number) => `${days} days ago`,
    monthAgo: (months: number) => `${months} months ago`,
  }

  getDiffDays(stringDate: string): number {
    const date = new Date(stringDate);
    const now = new Date();
    const msPerDay = 1000 * 60 * 60 * 24

    const total = Math.floor((now.getTime() - date.getTime()) / msPerDay);

    return isNaN(total) ? -1 : total;
  }

  getDaysMessage(stringDate: string|undefined): string {
    if(!stringDate) return "";
    const days = this.getDiffDays(stringDate);

    return days == 0 ? this.dateText.today()
      : days == 1 ? this.dateText.yesterday()
        : days < 30 ? this.dateText.daysAgo(days)
          : this.dateText.monthAgo(Math.ceil(days / 30));
  }

  handleTab(event: KeyboardEvent) {
    const textarea = event.target as HTMLTextAreaElement;

    if (event.key === 'Tab') {
      event.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;
      const spaces = '\t';

      if (event.shiftKey) {
        if (value.substring(start - 2, start) === '\t') {
          textarea.value =
            value.substring(0, start - 2) + value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start - 2;
        }
      } else {
        textarea.value =
          value.substring(0, start) + spaces + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + spaces.length;
      }
    }
  }
}
