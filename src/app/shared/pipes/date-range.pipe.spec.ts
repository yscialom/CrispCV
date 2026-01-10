import { TestBed } from '@angular/core/testing';
import { DateRangePipe } from './date-range.pipe';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { vi } from 'vitest';

describe('DateRangePipe', () => {
  let pipe: DateRangePipe;
  let translate: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), DateRangePipe],
      providers: [DateRangePipe],
    });
    translate = TestBed.inject(TranslateService);
    pipe = TestBed.inject(DateRangePipe);
    
    // Default mock behavior
    vi.spyOn(translate, 'instant').mockImplementation((k) => k);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('formats YYYY-MM correctly (en_US)', () => {
    translate.currentLang = 'en_US';
    const result = pipe.transform('2023-06');
    // en-US short month for June is "Jun", plus dot -> "Jun. 2023"
    // Note: check your logic for dot addition.
    expect(result).toContain('Jun. 2023');
  });

  it('formats YYYY-MM correctly (fr_FR)', () => {
    translate.currentLang = 'fr_FR';
    const result = pipe.transform('2023-06');
    // fr-FR short month for June is "juin" (no dot usually).
    // Or "juin" -> "juin." if logic forces it?
    // User logic: "mmm."
    // fr-FR locale usually gives "juin", no dot. My logic only enforces dot if locale starts with 'en'.
    // Wait, "juin" is full name, abbreviation is also "juin".
    // Try '2023-02' (Feb/Fév).
    // fr-FR: "févr." or "fév."?
    expect(result).toMatch(/juin 2023/i);
  });

  it('formats YYYY-MM range', () => {
    translate.currentLang = 'en_US';
    const result = pipe.transform('2020-01', '2021-02');
    expect(result).toBe('Jan. 2020 - Feb. 2021');
  });
  
  it('formats range with Present', () => {
      translate.currentLang = 'en_US';
      vi.spyOn(translate, 'instant').mockImplementation((key) => {
          if(key === 'COMMON.PRESENT') return 'Present';
          return key as string;
      });
      const result = pipe.transform('2023-06', 'Present');
      expect(result).toBe('Jun. 2023 - Present');
  });
});
