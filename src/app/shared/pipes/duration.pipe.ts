import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(startDateStr: string, endDateStr?: string | null): string {
    if (!startDateStr) return '';
    const endStr = endDateStr || 'Present';
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
    const numberFormat = new Intl.NumberFormat('fr-FR');

    if (years >= 10) {
      const roundedYears = Math.round(years);
      return `${numberFormat.format(roundedYears)} ans`;
    }

    if (years >= 1) {
      const roundedHalfYears = Math.round(years * 2) / 2;
      const unit = roundedHalfYears >= 2 ? 'ans' : 'an';
      return `${numberFormat.format(roundedHalfYears)} ${unit}`;
    }

    return `${months} mois`;
  }

  private parseDate(dateStr: string): Date {
    if (!dateStr || dateStr.toLowerCase() === 'present' || dateStr.toLowerCase() === 'présent') {
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

    // Fallback
    return new Date();
  }
}
