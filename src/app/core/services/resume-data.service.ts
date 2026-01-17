import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../../../../config/app.config';
import {
  Resume,
  Profile,
  Experience,
  Education,
  Certification,
  Skill,
} from '../../core/models/resume.models';
import { PROFILES, SUPPORTED_LANGUAGES } from '../profile.registry';

interface PersistedLang {
  lang: string;
  expiry: number;
}

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  private readonly translate = inject(TranslateService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly LANG_KEY = 'app-lang';
  private readonly EXPIRY_MS = 3 * 30 * 24 * 60 * 60 * 1000; // ~3 months

  public readonly currentLocale = signal<string>(
    this.translate.currentLang || this.translate.defaultLang || APP_CONFIG.defaultLanguage,
  );

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const initialLang = this.getInitialLang();
      this.translate.use(initialLang);
    }

    this.translate.onLangChange.subscribe((event) => {
      this.currentLocale.set(event.lang);
      if (isPlatformBrowser(this.platformId)) {
        this.saveLang(event.lang);
      }
    });
  }

  private getInitialLang(): string {
    const saved = localStorage.getItem(this.LANG_KEY);
    if (saved) {
      try {
        const { lang, expiry } = JSON.parse(saved) as PersistedLang;
        if (Date.now() < expiry && SUPPORTED_LANGUAGES.includes(lang)) {
          return lang;
        }
      } catch {
        // Ignore parsing errors
      }
    }

    // Try browser preference
    const browserLang = this.translate.getBrowserLang();
    if (browserLang && SUPPORTED_LANGUAGES.includes(browserLang)) {
      return browserLang;
    }

    // Match generic browser lang (e.g., 'en') to supported lang (e.g., 'en_US')
    if (browserLang) {
      const match = SUPPORTED_LANGUAGES.find((l) => l.startsWith(browserLang));
      if (match) return match;
    }

    return this.translate.defaultLang || APP_CONFIG.defaultLanguage;
  }

  private saveLang(lang: string): void {
    const persisted: PersistedLang = {
      lang,
      expiry: Date.now() + this.EXPIRY_MS,
    };
    localStorage.setItem(this.LANG_KEY, JSON.stringify(persisted));
  }

  private readonly resumeConfig = computed<Resume>(() => {
    const locale = this.currentLocale();
    return PROFILES[locale] || PROFILES['fr_FR'] || PROFILES[Object.keys(PROFILES)[0]];
  });

  public readonly profile = computed<Profile>(() => this.resumeConfig() as Profile);
  public readonly experiences = computed<Experience[]>(() => this.resumeConfig().experiences);
  public readonly educations = computed<Education[]>(() => this.resumeConfig().educations);
  public readonly certifications = computed<Certification[]>(
    () => this.resumeConfig().certifications || [],
  );
  public readonly skills = computed<Skill[]>(() => this.resumeConfig().skills);

  public getSupportedLanguages(): string[] {
    return SUPPORTED_LANGUAGES;
  }
}
