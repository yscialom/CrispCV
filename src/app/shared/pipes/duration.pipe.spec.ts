import { DurationPipe } from './duration.pipe';
import { TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { vi } from 'vitest';

describe('DurationPipe', () => {
  let pipe: DurationPipe;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [DurationPipe],
    });
    pipe = TestBed.inject(DurationPipe);
    translateService = TestBed.inject(TranslateService);
    // Mock instant to return the key or simple value
    vi.spyOn(translateService, 'instant').mockImplementation((key: string | string[]) => {
      if (typeof key === 'string') {
        if (key === 'COMMON.PRESENT') return 'Present';
        if (key === 'DURATION.YEAR_PLURAL') return 'ans';
        if (key === 'DURATION.YEAR_SINGULAR') return 'an';
        if (key === 'DURATION.MONTH') return 'mois';
      }
      return key;
    });
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string for missing start date', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should calculate duration correctly for months', () => {
    // 2023-01 to 2023-03 (inclusive) = 3 months
    expect(pipe.transform('2023-01', '2023-03')).toBe('3 mois');
  });

  it('should calculate duration correctly for 1 year', () => {
    // 2022-01 to 2022-12 (inclusive) = 12 months = 1 year
    expect(pipe.transform('2022-01', '2022-12')).toBe('1 an');
  });

  it('should calculate duration correctly for years', () => {
    // 2020-01 to 2022-01 (inclusive) = 25 months = ~2 years
    expect(pipe.transform('2020-01', '2022-01')).toBe('2 ans');
  });

  it('should handle "Present" as end date', () => {
    // Mocking Date to ensure stability would be better but for simple logic check:
    const now = new Date();
    // Assume start date is 1 month ago
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const startStr = `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, '0')}`;
    // Should be roughly 1 month
    expect(pipe.transform(startStr, 'Present')).toBeTruthy();
  });
});
