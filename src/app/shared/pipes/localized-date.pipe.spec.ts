import { LocalizedDatePipe } from './localized-date.pipe';
import { TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { DateFormatter } from '../utils/date-formatter';
import { vi } from 'vitest';

describe('LocalizedDatePipe', () => {
  let pipe: LocalizedDatePipe;
  let translate: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), LocalizedDatePipe],
      providers: [LocalizedDatePipe],
    });
    pipe = TestBed.inject(LocalizedDatePipe);
    translate = TestBed.inject(TranslateService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should delegate to DateFormatter', () => {
    const spy = vi.spyOn(DateFormatter, 'format').mockReturnValue('Formatted Date');
    const result = pipe.transform('2020-01');
    expect(spy).toHaveBeenCalledWith('2020-01', translate);
    expect(result).toBe('Formatted Date');
  });

  it('should return empty string for falsy input', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
    expect(pipe.transform('')).toBe('');
  });
});
