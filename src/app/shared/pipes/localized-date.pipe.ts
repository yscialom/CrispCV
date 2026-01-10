import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localizedDate',
  standalone: true,
  pure: false,
})
export class LocalizedDatePipe implements PipeTransform {
  private translate = inject(TranslateService);

  transform(dateStr: string | undefined | null): string {
    if (!dateStr) return '';
    return this.formatDate(dateStr);
  }

      private formatDate(dateStr: string): string {

        const currentLang = this.translate.currentLang || 'en_US';

        const locale = currentLang.replace('_', '-');

        

        const date = String(dateStr).trim();

        const parts = date.split(/\D+/).filter(p => p.length > 0);

    

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

             return `${this.getMonthAbbr(d, locale)} ${year}`;

          }

        }

    

        // YYYY-MM-DD

        if (parts.length === 3) {

          const year = Number(parts[0]);

          const month = Number(parts[1]);

          const day = Number(parts[2]);

           if (!isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {

              const d = new Date(year, month - 1, day);

              return `${day} ${this.getMonthAbbr(d, locale)} ${year}`;

           }

        }

    

        return dateStr;

      }

    
    private getMonthAbbr(date: Date, locale: string): string {
    const formatter = new Intl.DateTimeFormat(locale, { month: 'short' });
    const month = formatter.format(date);

    if (locale.startsWith('en')) {
      if (!month.endsWith('.')) {
        return `${month}.`;
      }
    }

    return month;
  }
}
