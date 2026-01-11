import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Experience } from '../../../core/models/resume.models';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';
import { ResumeEntryComponent } from '../../../shared/components/resume-entry/resume-entry.component';
import { PermalinkService } from '../../../core/services/permalink.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [MarkdownPipe, ResumeEntryComponent, TranslateModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCardComponent {
  public readonly experience = input.required<Experience>();
  public readonly isFirst = input<boolean>(false);
  private readonly permalinkService = inject(PermalinkService);

  public readonly permalink = computed(() => {
    return this.permalinkService.getEntryByItem(this.experience());
  });
}
