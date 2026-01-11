import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DateFormatter } from '../utils/date-formatter';

@Pipe({
  name: 'localizedDate',
  standalone: true,
  pure: false,
})
export class LocalizedDatePipe implements PipeTransform {
  private translate = inject(TranslateService);

  transform(dateStr: string | undefined | null): string {
    if (!dateStr) return '';
    return DateFormatter.format(dateStr, this.translate);
  }
}
