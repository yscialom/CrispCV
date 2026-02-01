import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ResumeDataService } from '../../../core/services/resume-data.service';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-description',
  standalone: true,
  imports: [MarkdownPipe, TranslateModule],
  templateUrl: './about-description.component.html',
  styleUrl: './about-description.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutDescriptionComponent {
  private resumeDataService = inject(ResumeDataService);

  profile = this.resumeDataService.profile;
  socialLinks = computed(() => this.profile().socialLinks || []);
}
