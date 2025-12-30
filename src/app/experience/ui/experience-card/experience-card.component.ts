import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Experience } from '../../../core/models/resume.models';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';
import { ResumeEntryComponent } from '../../../shared/components/resume-entry/resume-entry.component';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [MarkdownPipe, ResumeEntryComponent],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCardComponent {
  public readonly experience = input.required<Experience>();

  public readonly duration = computed(() => {
    const exp = this.experience();
    return this.calculateDuration(exp.startDate, exp.endDate);
  });

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
