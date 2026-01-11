import { TestBed } from '@angular/core/testing';
import { KeywordService } from './keyword.service';
import { ResumeDataService } from './resume-data.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { signal } from '@angular/core';
import { vi, describe, it, expect, beforeEach } from 'vitest';

describe('KeywordService', () => {
  let service: KeywordService;
  let translate: TranslateService;
  
  const mockExperiences = [
    {
      title: 'Dev 1',
      company: 'Co 1',
      startDate: '2020-01',
      endDate: '2020-06', // 6 months
      keywords: ['Angular', 'TS'],
    },
    {
      title: 'Dev 2',
      company: 'Co 2',
      startDate: '2021-01',
      endDate: '2021-12', // 12 months
      keywords: ['Angular', 'CSS'],
    }
  ];

  beforeEach(() => {
    const mockResumeDataService = {
      experiences: signal(mockExperiences)
    };

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        KeywordService,
        { provide: ResumeDataService, useValue: mockResumeDataService }
      ]
    });
    service = TestBed.inject(KeywordService);
    translate = TestBed.inject(TranslateService);
    translate.currentLang = 'en_US';

    vi.spyOn(translate, 'instant').mockImplementation((key: string | string[]) => {
        if (typeof key !== 'string') return key;
        const translations: Record<string, string> = {
          'DURATION.YEAR_PLURAL': 'years',
          'DURATION.YEAR_SINGULAR': 'year',
          'DURATION.MONTH': 'months',
        };
        return translations[key] || key;
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle keyword selection', () => {
    expect(service.selectedKeyword()).toBeNull();
    
    service.setKeyword('Angular');
    expect(service.selectedKeyword()).toBe('Angular');
    
    service.setKeyword('Angular'); // Toggle off
    expect(service.selectedKeyword()).toBeNull();
    
    service.setKeyword('TS');
    expect(service.selectedKeyword()).toBe('TS');
  });

  it('should calculate stats for a keyword', () => {
    // Angular is in both: 6 + 12 = 18 months = 1.5 years
    expect(service.getStats('Angular')).toBe('1.5 years');
    
    // TS is in one: 6 months
    expect(service.getStats('TS')).toBe('6 months');
    
    // Unknown keyword
    expect(service.getStats('React')).toBe('');
  });
});
