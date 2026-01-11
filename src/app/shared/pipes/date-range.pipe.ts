import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DateFormatter } from '../utils/date-formatter';

@Pipe({
  name: 'dateRange',
  standalone: true,
  pure: false,
})
export class DateRangePipe implements PipeTransform {
  private translate = inject(TranslateService);

  transform(startDate: string, endDate?: string | null): string {
    const formattedStart = DateFormatter.format(startDate, this.translate);
    const formattedEnd = endDate
      ? DateFormatter.format(endDate, this.translate)
      : this.translate.instant('COMMON.PRESENT');

    return `${formattedStart} – ${formattedEnd}`;
  }
}
