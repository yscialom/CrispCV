import { TranslateService } from '@ngx-translate/core';

export class DateFormatter {
  static format(dateStr: string, translate: TranslateService): string {
    const currentLang = translate.currentLang || 'en_US';
    const locale = currentLang.replace('_', '-');

    if (!dateStr) return '';
    const date = String(dateStr).trim();

    // Handle "Present" strings if passed directly
    if (date === 'Present' || date === 'Présent' || date === translate.instant('COMMON.PRESENT')) {
      return translate.instant('COMMON.PRESENT');
    }

    // Split by non-digits
    const parts = date.split(/\D+/).filter((p) => p.length > 0);

    // YYYY
    if (parts.length === 1 && /^\d{4}$/.test(parts[0])) {
      return parts[0];
    }

    // YYYY-MM
    if (parts.length === 2) {
      const year = Number(parts[0]);
      const month = Number(parts[1]);
      if (!isNaN(year) && !isNaN(month) && month >= 1 && month <= 12) {
        const d = new Date(year, month - 1, 1);
        return `${DateFormatter.getMonthAbbr(d, locale)} ${year}`;
      }
    }

    // YYYY-MM-DD
    if (parts.length === 3) {
      const year = Number(parts[0]);
      const month = Number(parts[1]);
      const day = Number(parts[2]);
      if (
        !isNaN(year) &&
        !isNaN(month) &&
        !isNaN(day) &&
        month >= 1 &&
        month <= 12 &&
        day >= 1 &&
        day <= 31
      ) {
        const d = new Date(year, month - 1, day);
        return `${day} ${DateFormatter.getMonthAbbr(d, locale)} ${year}`;
      }
    }

    return dateStr;
  }

  private static getMonthAbbr(date: Date, locale: string): string {
    const formatterShort = new Intl.DateTimeFormat(locale, { month: 'short' });
    const formatterLong = new Intl.DateTimeFormat(locale, { month: 'long' });

    const short = formatterShort.format(date);
    const long = formatterLong.format(date);

    // Only add dot if it's an actual abbreviation and doesn't already have one
    if (short !== long && !short.endsWith('.')) {
      return `${short}.`;
    }

    return short;
  }
}
