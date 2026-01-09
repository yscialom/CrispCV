import { Injectable, signal, computed, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Resume, Profile, Experience, Education, Skill } from '../../core/models/resume.models';
import { PROFILES, SUPPORTED_LANGUAGES } from '../profile.registry';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  private readonly translate = inject(TranslateService);

  public readonly currentLocale = signal<string>(
    this.translate.currentLang || this.translate.defaultLang || 'fr_FR',
  );

  constructor() {
    this.translate.onLangChange.subscribe((event) => {
      this.currentLocale.set(event.lang);
    });
  }

  private readonly resumeConfig = computed<Resume>(() => {
    const locale = this.currentLocale();
    return PROFILES[locale] || PROFILES['fr_FR'] || PROFILES[Object.keys(PROFILES)[0]];
  });

  public readonly profile = computed<Profile>(() => this.resumeConfig() as Profile);
  public readonly experiences = computed<Experience[]>(() => this.resumeConfig().experiences);
  public readonly educations = computed<Education[]>(() => this.resumeConfig().educations);
  public readonly skills = computed<Skill[]>(() => this.resumeConfig().skills);

  public getSupportedLanguages(): string[] {
    return SUPPORTED_LANGUAGES;
  }
}
