import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  HostListener,
  ElementRef,
} from '@angular/core';
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
  public translate = inject(TranslateService);
  private resumeDataService = inject(ResumeDataService);
  private elementRef = inject(ElementRef);

  isOpen = signal(false);
  private closeTimeout: ReturnType<typeof setTimeout> | undefined;

  supportedLanguages = this.resumeDataService.getSupportedLanguages();
  currentLang = this.resumeDataService.currentLocale;

  languageDetails: Record<string, { name: string; flag: string }> = {
    fr_FR: { name: 'Français', flag: '🇫🇷' },
    en_US: { name: 'English (US)', flag: '🇺🇸' },
    en_GB: { name: 'English (UK)', flag: '🇬🇧' },
  };

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  toggle(event: MouseEvent) {
    event.stopPropagation();
    this.isOpen.update((v) => !v);
  }

  open() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    this.isOpen.set(true);
  }

  close() {
    this.closeTimeout = setTimeout(() => {
      this.isOpen.set(false);
    }, 200); // 200ms grace period
  }

  switchLanguage(event: MouseEvent, lang: string) {
    event.stopPropagation();
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    console.log('Switching to language:', lang);
    this.translate.use(lang);
    this.isOpen.set(false);
  }

  getLangName(lang: string): string {
    return this.languageDetails[lang]?.name || lang;
  }

  getLangFlag(lang: string): string {
    return this.languageDetails[lang]?.flag || '🏳️';
  }
}
