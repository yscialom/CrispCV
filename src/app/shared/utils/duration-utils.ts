import { TranslateService } from '@ngx-translate/core';

export class DurationUtils {
  static calculateMonths(
    startDateStr: string,
    endDateStr?: string | null,
    translate?: TranslateService,
  ): number {
    if (!startDateStr) return 0;

    const endStr = endDateStr || (translate ? translate.instant('COMMON.PRESENT') : 'Present');
    const start = DurationUtils.parseDate(startDateStr, translate);
    const end = DurationUtils.parseDate(endStr, translate);

    let months =
      (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    months += 1; // Inclusive

    return Math.max(0, months);
  }

  static formatDuration(months: number, translate: TranslateService): string {
    if (months < 1) return '';

    const years = months / 12;
    const currentLang = translate.currentLang || 'en_US';
    const locale = currentLang.replace('_', '-');
    const numberFormat = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });

    if (years >= 10) {
      const roundedYears = Math.round(years);
      return `${numberFormat.format(roundedYears)} ${translate.instant('DURATION.YEAR_PLURAL')}`;
    }

    if (years >= 1) {
      const roundedHalfYears = Math.round(years * 2) / 2;
      const unitKey = roundedHalfYears > 1 ? 'DURATION.YEAR_PLURAL' : 'DURATION.YEAR_SINGULAR';
      return `${numberFormat.format(roundedHalfYears)} ${translate.instant(unitKey)}`;
    }

    return `${months} ${translate.instant('DURATION.MONTH')}`;
  }

  private static parseDate(dateStr: string, translate?: TranslateService): Date {
    const presentFrench = 'présent';
    const presentEnglish = 'present';
    const currentPresent = translate
      ? translate.instant('COMMON.PRESENT').toLowerCase()
      : 'present';

    if (
      !dateStr ||
      dateStr.toLowerCase() === presentFrench ||
      dateStr.toLowerCase() === presentEnglish ||
      dateStr.toLowerCase() === currentPresent
    ) {
      return new Date();
    }

    // Handle YYYY-MM
    const yyyyMm = /^\d{4}-\d{2}$/;
    if (yyyyMm.test(dateStr)) {
      const [year, month] = dateStr.split('-').map(Number);
      return new Date(year, month - 1, 1);
    }

    // Handle YYYY
    const yyyy = /^\d{4}$/;
    if (yyyy.test(dateStr)) {
      const year = parseInt(dateStr, 10);
      return new Date(year, 0, 1);
    }

    // Handle YYYY-MM-DD
    const yyyyMmDd = /^\d{4}-\d{2}-\d{2}$/;
    if (yyyyMmDd.test(dateStr)) {
      return new Date(dateStr);
    }

    // Fallback
    console.warn(
      `[DurationUtils] Could not parse date string: "${dateStr}". Falling back to today.`,
    );
    return new Date();
  }
}
