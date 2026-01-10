import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'dateRange',
  standalone: true,
  pure: false,
})
export class DateRangePipe implements PipeTransform {
  private translate = inject(TranslateService);

  transform(startDate: string, endDate?: string | null): string {
    const formattedStart = this.formatDate(startDate);
    const formattedEnd = endDate
      ? this.formatDate(endDate)
      : this.translate.instant('COMMON.PRESENT');

    return `${formattedStart} - ${formattedEnd}`;
  }

  private formatDate(dateStr: string): string {
    const currentLang = this.translate.currentLang || 'en_US';
    const locale = currentLang.replace('_', '-');

    if (!dateStr) return '';
    const date = dateStr.trim();
    
    // Handle "Present" strings if passed directly
    if (
      date === 'Present' ||
      date === 'Présent' ||
      date === this.translate.instant('COMMON.PRESENT')
    ) {
      return this.translate.instant('COMMON.PRESENT');
    }

    // YYYY
    if (/^\d{4}$/.test(date)) {
      return date;
    }

    // YYYY-MM
    if (/^\d{4}-\d{2}$/.test(date)) {
      const [year, month] = date.split('-').map(Number);
      const d = new Date(year, month - 1, 1);
      return `${this.getMonthAbbr(d, locale)} ${year}`;
    }

    // YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      const [year, month, day] = date.split('-').map(Number);
      const d = new Date(year, month - 1, day);
      return `${day} ${this.getMonthAbbr(d, locale)} ${year}`;
    }

    return dateStr;
  }

  private getMonthAbbr(date: Date, locale: string): string {
    const formatter = new Intl.DateTimeFormat(locale, { month: 'short' });
    const month = formatter.format(date);

    // Enforce dot for abbreviations if missing (User requirement: "mmm.")
    // English 'short' usually returns "Jan", we want "Jan."
    // French 'short' usually returns "janv.", we keep it.
    // Full month names (May, Mai, Juin, etc.) usually don't get dots.

    // Simple heuristic: if it doesn't end in a dot and length <= 4 (arbitrary check for abbr), add one?
    // Or strictly follow user example "feb." -> English needs dots.

    if (locale.startsWith('en')) {
      if (!month.endsWith('.')) {
        return `${month}.`;
      }
    }

    return month;
  }
}
