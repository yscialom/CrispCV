import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../core/services/resume-data.service';
import { MarkdownPipe } from '../shared/pipes/markdown.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MarkdownPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private resumeDataService = inject(ResumeDataService);

  profile = this.resumeDataService.profile;

  // Computed properties for specific sections to make template cleaner if needed
  // or just access profile() directly.
  languages = computed(() => this.profile().languages || []);
  socialLinks = computed(() => this.profile().socialLinks || []);
  volunteering = computed(() => this.profile().volunteering || []);
  hobbies = computed(() => this.profile().hobbies || []);
  personalProjects = computed(() => this.profile().personalProjects || []);

  // Helper to format date if needed, or just use pipe in template
}
