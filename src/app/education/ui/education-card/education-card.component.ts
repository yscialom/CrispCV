import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Education } from '../../../core/models/resume.models';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';
import { ResumeEntryComponent } from '../../../shared/components/resume-entry/resume-entry.component';

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
}
