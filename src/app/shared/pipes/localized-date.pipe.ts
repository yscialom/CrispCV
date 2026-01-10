import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localizedDate',
  standalone: true,
  pure: false,
})
export class LocalizedDatePipe implements PipeTransform {
  private translate = inject(TranslateService);

  transform(dateStr: string | undefined | null): string {
    if (!dateStr) return '';
    return this.formatDate(dateStr);
  }

  private formatDate(dateStr: string): string {
    const currentLang = this.translate.currentLang || 'en_US';
    const locale = currentLang.replace('_', '-');

    // YYYY
    if (/^\d{4}$/.test(dateStr)) {
      return dateStr;
    }

    // YYYY-MM
    if (/^\d{4}-\d{2}$/.test(dateStr)) {
      const [year, month] = dateStr.split('-').map(Number);
      const date = new Date(year, month - 1, 1);
      return `${this.getMonthAbbr(date, locale)} ${year}`;
    }

    // YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      const [year, month, day] = dateStr.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      return `${day} ${this.getMonthAbbr(date, locale)} ${year}`;
    }

    return dateStr;
  }

  private getMonthAbbr(date: Date, locale: string): string {
    const formatter = new Intl.DateTimeFormat(locale, { month: 'short' });
    const month = formatter.format(date);

    if (locale.startsWith('en')) {
       if (!month.endsWith('.')) {
         return `${month}.`;
       }
    }
    
    return month;
  }
}
