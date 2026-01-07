import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ResumeDataService } from '../../../core/services/resume-data.service';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitchComponent {
  private translate = inject(TranslateService);
  private resumeDataService = inject(ResumeDataService);

  supportedLanguages = this.resumeDataService.getSupportedLanguages();
  currentLang = computed(() => this.translate.currentLang || 'fr_FR');

  languageDetails: Record<string, { name: string; flag: string }> = {
    fr_FR: { name: 'Français', flag: '🇫🇷' },
    en_US: { name: 'English (US)', flag: '🇺🇸' },
    en_GB: { name: 'English (UK)', flag: '🇬🇧' },
  };

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  getLangName(lang: string): string {
    return this.languageDetails[lang]?.name || lang;
  }

  getLangFlag(lang: string): string {
    return this.languageDetails[lang]?.flag || '🏳️';
  }
}
