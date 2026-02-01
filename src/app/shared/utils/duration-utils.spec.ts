import { DurationUtils } from './duration-utils';
import { TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { vi, describe, it, expect, beforeEach } from 'vitest';

describe('DurationUtils', () => {
  let translate: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    });
    translate = TestBed.inject(TranslateService);
    translate.currentLang = 'en_US';

    vi.spyOn(translate, 'instant').mockImplementation((key: string | string[]) => {
      if (typeof key !== 'string') return key;
      const translations: Record<string, string> = {
        'COMMON.PRESENT': 'Present',
        'DURATION.YEAR_PLURAL': 'years',
        'DURATION.YEAR_SINGULAR': 'year',
        'DURATION.MONTH': 'months',
      };
      return translations[key] || key;
    });
  });

  describe('calculateMonths', () => {
    it('should calculate months between two dates', () => {
      expect(DurationUtils.calculateMonths('2020-01', '2020-12')).toBe(12);
    });

    it('should handle partial dates (YYYY)', () => {
      expect(DurationUtils.calculateMonths('2020', '2021')).toBe(13);
    });

    it('should handle full dates (YYYY-MM-DD)', () => {
      expect(DurationUtils.calculateMonths('2020-01-01', '2020-01-31')).toBe(1);
    });

    it('should handle Present correctly', () => {
      const now = new Date();
      const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);
      const dateStr = `${sixMonthsAgo.getFullYear()}-${String(sixMonthsAgo.getMonth() + 1).padStart(2, '0')}`;
      expect(DurationUtils.calculateMonths(dateStr, null, translate)).toBe(6);
    });

    it('should return 0 for empty start date', () => {
      expect(DurationUtils.calculateMonths('')).toBe(0);
    });
  });

  describe('formatDuration', () => {
    it('should format months (en_US)', () => {
      expect(DurationUtils.formatDuration(6, translate)).toBe('6 months');
    });

    it('should format years (en_US)', () => {
      expect(DurationUtils.formatDuration(18, translate)).toBe('1.5 years');
    });

    it('should format many years (en_US)', () => {
      expect(DurationUtils.formatDuration(144, translate)).toBe('12 years');
    });

    it('should format correctly in French', () => {
      translate.currentLang = 'fr_FR';
      vi.spyOn(translate, 'instant').mockImplementation((key: string | string[]) => {
        if (typeof key !== 'string') return key;
        const translations: Record<string, string> = {
          'DURATION.YEAR_PLURAL': 'ans',
          'DURATION.YEAR_SINGULAR': 'an',
          'DURATION.MONTH': 'mois',
        };
        return translations[key] || key;
      });
      // 1.5 in FR uses comma
      expect(DurationUtils.formatDuration(18, translate)).toBe('1,5 ans');
    });
  });
});
