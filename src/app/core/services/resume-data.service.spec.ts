import { TestBed } from '@angular/core/testing';
import { ResumeDataService } from './resume-data.service';
import { PROFILE_CONFIG } from '../../../../config/profile.fr_FR';
import { Resume } from '../../core/models/resume.models';
import { TranslateService, TranslateModule, LangChangeEvent } from '@ngx-translate/core';
import { EventEmitter, PLATFORM_ID } from '@angular/core';
import { vi } from 'vitest';

describe('ResumeDataService', () => {
  let service: ResumeDataService;
  let translateServiceMock: {
    currentLang: string;
    defaultLang: string;
    onLangChange: EventEmitter<LangChangeEvent>;
    use: ReturnType<typeof vi.fn>;
    getBrowserLang: ReturnType<typeof vi.fn>;
  };
  let onLangChangeEmitter: EventEmitter<LangChangeEvent>;
  let localStorageMock: Record<string, string>;

  const mockDate = new Date(2025, 0, 1).getTime(); // Fixed date

  beforeEach(() => {
    // Mock LocalStorage
    localStorageMock = {};
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(
      (key) => localStorageMock[key] || null,
    );
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation((key, value) => {
      localStorageMock[key] = value;
    });

    // Mock Date
    vi.setSystemTime(mockDate);

    onLangChangeEmitter = new EventEmitter();
    translateServiceMock = {
      currentLang: 'fr_FR',
      defaultLang: 'fr_FR',
      onLangChange: onLangChangeEmitter,
      use: vi.fn(),
      getBrowserLang: vi.fn().mockReturnValue('fr'),
    };

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        ResumeDataService,
        {
          provide: TranslateService,
          useValue: translateServiceMock,
        },
        { provide: PLATFORM_ID, useValue: 'browser' }, // Simulate Browser
      ],
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  describe('Initialization', () => {
    it('should use persisted language if valid', () => {
      const validExpiry = mockDate + 100000;
      localStorageMock['app-lang'] = JSON.stringify({ lang: 'en_US', expiry: validExpiry });

      service = TestBed.inject(ResumeDataService);

      expect(translateServiceMock.use).toHaveBeenCalledWith('en_US');
    });

    it('should fallback to browser language if persisted is expired', () => {
      const expiredExpiry = mockDate - 100000;
      localStorageMock['app-lang'] = JSON.stringify({ lang: 'en_US', expiry: expiredExpiry });
      translateServiceMock.getBrowserLang.mockReturnValue('fr');

      service = TestBed.inject(ResumeDataService);

      // Should try to match 'fr' -> 'fr_FR' (assuming fr_FR is supported)
      expect(translateServiceMock.use).toHaveBeenCalledWith('fr_FR');
    });

    it('should fallback to default language if no browser lang match', () => {
      localStorageMock = {}; // Empty storage
      translateServiceMock.getBrowserLang.mockReturnValue('es'); // 'es' not supported

      service = TestBed.inject(ResumeDataService);

      expect(translateServiceMock.use).toHaveBeenCalledWith('fr_FR'); // Default fallback
    });
  });

  describe('Runtime', () => {
    beforeEach(() => {
      service = TestBed.inject(ResumeDataService);
    });

    it('should save language to localStorage on change', () => {
      const expectedExpiry = mockDate + 3 * 30 * 24 * 60 * 60 * 1000; // 3 months

      onLangChangeEmitter.emit({ lang: 'en_US', translations: {} });

      expect(localStorage.setItem).toHaveBeenCalledWith('app-lang', expect.any(String));
      const saved = JSON.parse(localStorageMock['app-lang']);
      expect(saved.lang).toBe('en_US');
      expect(saved.expiry).toBe(expectedExpiry);
    });

    it('should return profile data from configuration', () => {
      const profile = service.profile();
      expect(profile).toEqual(PROFILE_CONFIG as Resume);
    });

    it('should return experiences data from configuration', () => {
      const experiences = service.experiences();
      expect(experiences).toEqual((PROFILE_CONFIG as Resume).experiences);
    });
  });
});
