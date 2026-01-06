import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Education } from '../../../core/models/resume.models';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';
import { ResumeEntryComponent } from '../../../shared/components/resume-entry/resume-entry.component';
import { PermalinkService } from '../../../core/services/permalink.service';

@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [MarkdownPipe, ResumeEntryComponent],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationCardComponent {
  public readonly education = input.required<Education>();
  public readonly isFirst = input<boolean>(false);
  private readonly permalinkService = inject(PermalinkService);

  public readonly permalink = computed(() => {
    return this.permalinkService.getEntryByItem(this.education());
  });
}
