import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DurationUtils } from '../utils/duration-utils';

@Pipe({
  name: 'duration',
  standalone: true,
  pure: false,
})
export class DurationPipe implements PipeTransform {
  private translate = inject(TranslateService);

  transform(startDateStr: string, endDateStr?: string | null): string {
    const months = DurationUtils.calculateMonths(startDateStr, endDateStr, this.translate);
    return DurationUtils.formatDuration(months, this.translate);
  }
}
