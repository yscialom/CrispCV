import { DateFormatter } from './date-formatter';
import { TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { vi } from 'vitest';

describe('DateFormatter', () => {
  let translate: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    });
    translate = TestBed.inject(TranslateService);
    translate.currentLang = 'en_US';

    vi.spyOn(translate, 'instant').mockImplementation((key) => {
      if (key === 'COMMON.PRESENT') return 'Present';
      return key;
    });
  });

  it('should return empty string for null/undefined/empty', () => {
    expect(DateFormatter.format('', translate)).toBe('');
    expect(DateFormatter.format(null as unknown as string, translate)).toBe('');
    expect(DateFormatter.format(undefined as unknown as string, translate)).toBe('');
  });

  it('should handle "Present" correctly', () => {
    expect(DateFormatter.format('Present', translate)).toBe('Present');
  });

  it('should format YYYY', () => {
    expect(DateFormatter.format('2020', translate)).toBe('2020');
  });

  it('should format YYYY-MM (en_US)', () => {
    translate.currentLang = 'en_US';
    // 2020-01 -> Jan. 2020
    expect(DateFormatter.format('2020-01', translate)).toBe('Jan. 2020');
  });

  it('should format YYYY-MM (fr_FR)', () => {
    translate.currentLang = 'fr_FR';
    // 2020-01 -> janv. 2020 or similar.
    // We expect the util to NOT add a dot if the locale logic doesn't require it,
    // but the code says: if (locale.startsWith('en') && !month.endsWith('.')) add dot.
    // For FR, standard Intl output usually has a dot for abbreviations like 'janv.' or 'févr.', but 'juin'/'mai' don't.
    // Let's test May which is 'mai' in French.
    expect(DateFormatter.format('2020-05', translate)).toMatch(/mai 2020/i);
  });

  it('should format YYYY-MM-DD (en_US)', () => {
    translate.currentLang = 'en_US';
    // 2020-01-15 -> 15 Jan. 2020
    expect(DateFormatter.format('2020-01-15', translate)).toBe('15 Jan. 2020');
  });

  it('should format YYYY-MM-DD (fr_FR)', () => {
    translate.currentLang = 'fr_FR';
    // 2020-01-15 -> 15 janv. 2020
    expect(DateFormatter.format('2020-01-15', translate)).toMatch(/15 janv\.? 2020/i);
  });

  it('should return original string if parsing fails', () => {
    expect(DateFormatter.format('Not a date', translate)).toBe('Not a date');
    // "2020-13" (invalid month)
    expect(DateFormatter.format('2020-13', translate)).toBe('2020-13');
  });
});
