import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Experience } from '../../../core/models/resume.models';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';
import { ResumeEntryComponent } from '../../../shared/components/resume-entry/resume-entry.component';
import { DurationPipe } from '../../../shared/pipes/duration.pipe';
import { PermalinkService } from '../../../core/services/permalink.service';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [MarkdownPipe, ResumeEntryComponent],
  providers: [DurationPipe],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCardComponent {
  public readonly experience = input.required<Experience>();
  public readonly isFirst = input<boolean>(false);
  private readonly durationPipe = inject(DurationPipe);
  private readonly permalinkService = inject(PermalinkService);

  public readonly duration = computed(() => {
    const exp = this.experience();
    return this.durationPipe.transform(exp.startDate, exp.endDate);
  });

  public readonly permalink = computed(() => {
    return this.permalinkService.getEntryByItem(this.experience());
  });
}
