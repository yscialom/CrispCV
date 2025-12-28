import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Experience } from '../../../core/models/resume.models';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent {
  public readonly experience = input.required<Experience>();

  public readonly duration = computed(() => {
    const exp = this.experience();
    return this.calculateDuration(exp.startDate, exp.endDate);
  });

  private calculateDuration(startDateStr: string, endDateStr: string): string {
    const start = this.parseDate(startDateStr);
    const end = this.parseDate(endDateStr); // true for isEndDate

    // Calculate difference in months
    let months =
      (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

    // Add 1 month to be inclusive (e.g. Jan to Jan is 1 month)
    months += 1;

    if (months < 1) return '';

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const parts: string[] = [];
    if (years > 0) {
      parts.push(`${years} year${years > 1 ? 's' : ''}`);
    }
    if (remainingMonths > 0) {
      parts.push(`${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`);
    }

    return parts.join(' ');
  }

  private parseDate(dateStr: string): Date {
    if (!dateStr || dateStr.toLowerCase() === 'present') {
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
      // If it's a start date, assume Jan 1st. If end date, assume Dec 31st?
      // Or just count from start of year. Let's assume start of year for simplicity/consistency unless specified.
      // But typically "2020 - 2021" implies 2 years if inclusive? Or Jan 2020 to Jan 2021?
      // Let's assume Jan 1st for parsing "YYYY".
      return new Date(year, 0, 1);
    }

    // Fallback
    return new Date();
  }
}
