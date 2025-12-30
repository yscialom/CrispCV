import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ResumeDataService } from '../core/services/resume-data.service';
import { EducationCardComponent } from './ui/education-card/education-card.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [EducationCardComponent],
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  protected readonly educations = inject(ResumeDataService).educations;
}
