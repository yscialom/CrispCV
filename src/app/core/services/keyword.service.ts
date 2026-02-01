import { Injectable, computed, inject, signal } from '@angular/core';
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
  private readonly languageTrigger = signal<number>(0);

  /**
   * Precalculated statistics for all keywords.
   * Key: keyword string, Value: formatted duration string.
   */
  private readonly keywordStats = computed(() => {
    // Dependency on language trigger to recompute on language change
    this.languageTrigger();

    const experiences = this.resumeDataService.experiences();
    const stats: Record<string, number> = {};

    for (const exp of experiences) {
      if (!exp.keywords) continue;
      const months = DurationUtils.calculateMonths(
        exp.startDate,
        exp.endDate,
        this.translateService,
      );
      for (const keyword of exp.keywords) {
        stats[keyword] = (stats[keyword] || 0) + months;
      }
    }

    const formattedStats: Record<string, string> = {};
    for (const [keyword, months] of Object.entries(stats)) {
      formattedStats[keyword] = DurationUtils.formatDuration(months, this.translateService);
    }
    return formattedStats;
  });

  constructor() {
    this.translateService.onLangChange.pipe(takeUntilDestroyed()).subscribe(() => {
      this.selectedKeyword.set(null);
      this.languageTrigger.update((n) => n + 1);
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
    return this.keywordStats()[keyword] || '';
  }
}
