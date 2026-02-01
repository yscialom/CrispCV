import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ResumeDataService } from '../../../core/services/resume-data.service';
import { LocalizedDatePipe } from '../../../shared/pipes/localized-date.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-personal-info',
  standalone: true,
  imports: [LocalizedDatePipe, TranslateModule],
  templateUrl: './about-personal-info.component.html',
  styleUrl: './about-personal-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPersonalInfoComponent {
  private resumeDataService = inject(ResumeDataService);
  private translate = inject(TranslateService);

  profile = this.resumeDataService.profile;

  languages = computed(() => this.profile().languages || []);
  hobbies = computed(() => this.profile().hobbies || []);

  age = computed(() => {
    const dob = this.profile().birthDate;
    if (!dob) return null;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  });

  ageDisplay = computed(() => {
    const a = this.age();
    if (a === null) return '';
    const currentLang = this.translate.currentLang || 'en_US';
    const locale = currentLang.replace('_', '-');
    return new Intl.NumberFormat(locale).format(a);
  });

  getLanguageLevelLabel(level: number): string {
    switch (level) {
      case 1:
        return 'LANGUAGE_LEVELS.BEGINNER';
      case 2:
        return 'LANGUAGE_LEVELS.INTERMEDIATE';
      case 3:
        return 'LANGUAGE_LEVELS.ADVANCED';
      case 4:
        return 'LANGUAGE_LEVELS.FLUENT';
      case 5:
        return 'LANGUAGE_LEVELS.NATIVE';
      default:
        return '';
    }
  }
}
