import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ResumeDataService } from '../core/services/resume-data.service';
import { EducationCardComponent } from './ui/education-card/education-card.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [EducationCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  private readonly resumeDataService = inject(ResumeDataService);
  protected readonly educations = this.resumeDataService.educations;
}
