import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'duration',
  standalone: true,
  pure: false,
})
export class DurationPipe implements PipeTransform {
  private translate = inject(TranslateService);

  transform(startDateStr: string, endDateStr?: string | null): string {
    if (!startDateStr) return '';
    const endStr = endDateStr || this.translate.instant('COMMON.PRESENT');
    return this.calculateDuration(startDateStr, endStr);
  }

  private calculateDuration(startDateStr: string, endDateStr: string): string {
    const start = this.parseDate(startDateStr);
    const end = this.parseDate(endDateStr);

    let months =
      (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    months += 1; // Inclusive

    if (months < 1) return '';

    const years = months / 12;
    const currentLang = this.translate.currentLang || 'en_US';
    const locale = currentLang.replace('_', '-');
    const numberFormat = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });

    if (years >= 10) {
      const roundedYears = Math.round(years);
      return `${numberFormat.format(roundedYears)} ${this.translate.instant('DURATION.YEAR_PLURAL')}`;
    }

    if (years >= 1) {
      const roundedHalfYears = Math.round(years * 2) / 2;
      const unitKey = roundedHalfYears >= 2 ? 'DURATION.YEAR_PLURAL' : 'DURATION.YEAR_SINGULAR';
      return `${numberFormat.format(roundedHalfYears)} ${this.translate.instant(unitKey)}`;
    }

    return `${months} ${this.translate.instant('DURATION.MONTH')}`;
  }

  private parseDate(dateStr: string): Date {
    const presentFrench = 'présent';
    const presentEnglish = 'present';
    const currentPresent = this.translate.instant('COMMON.PRESENT').toLowerCase();

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
    return new Date();
  }
}
