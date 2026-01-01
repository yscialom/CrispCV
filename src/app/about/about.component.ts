import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../core/services/resume-data.service';
import { MarkdownPipe } from '../shared/pipes/markdown.pipe';
import { ResumeEntryComponent } from '../shared/components/resume-entry/resume-entry.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MarkdownPipe, ResumeEntryComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private resumeDataService = inject(ResumeDataService);

  profile = this.resumeDataService.profile;

  languages = computed(() => this.profile().languages || []);
  socialLinks = computed(() => this.profile().socialLinks || []);
  volunteering = computed(() => this.profile().volunteering || []);
  hobbies = computed(() => this.profile().hobbies || []);
  personalProjects = computed(() => this.profile().personalProjects || []);

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

  getLanguageLevelLabel(level: number): string {
    switch (level) {
      case 1:
        return 'Débutant';
      case 2:
        return 'Intermédiaire';
      case 3:
        return 'Avancé';
      case 4:
        return 'Courant';
      case 5:
        return 'Bilingue / Natif';
      default:
        return '';
    }
  }
}
