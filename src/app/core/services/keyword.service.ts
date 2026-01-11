import { Injectable, inject, signal } from '@angular/core';
import { ResumeDataService } from './resume-data.service';
import { TranslateService } from '@ngx-translate/core';
import { DurationUtils } from '../../shared/utils/duration-utils';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class KeywordService {
  private resumeDataService = inject(ResumeDataService);
  private translateService = inject(TranslateService);

  public readonly selectedKeyword = signal<string | null>(null);

  constructor() {
    this.translateService.onLangChange.pipe(takeUntilDestroyed()).subscribe(() => {
      this.selectedKeyword.set(null);
    });
  }

  public setKeyword(keyword: string | null): void {
    if (this.selectedKeyword() === keyword) {
      this.selectedKeyword.set(null);
    } else {
      this.selectedKeyword.set(keyword);
    }
  }

  public getStats(keyword: string): string {
    const experiences = this.resumeDataService.experiences();
    let totalMonths = 0;

    for (const exp of experiences) {
      if (exp.keywords?.includes(keyword)) {
        totalMonths += DurationUtils.calculateMonths(
          exp.startDate,
          exp.endDate,
          this.translateService,
        );
      }
    }

    return DurationUtils.formatDuration(totalMonths, this.translateService);
  }
}
