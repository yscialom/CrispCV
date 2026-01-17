import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Certification } from '../../../core/models/resume.models';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';
import { ResumeEntryComponent } from '../../../shared/components/resume-entry/resume-entry.component';
import { PermalinkService } from '../../../core/services/permalink.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-certification-card',
  standalone: true,
  imports: [MarkdownPipe, ResumeEntryComponent, TranslateModule],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationCardComponent {
  public readonly certification = input.required<Certification>();
  public readonly isFirst = input<boolean>(false);
  private readonly permalinkService = inject(PermalinkService);

  public readonly permalink = computed(() => {
    return this.permalinkService.getEntryByItem(this.certification());
  });
}
