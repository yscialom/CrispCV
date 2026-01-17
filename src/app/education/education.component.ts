import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ResumeDataService } from '../core/services/resume-data.service';
import { EducationCardComponent } from './ui/education-card/education-card.component';
import { CertificationCardComponent } from './ui/certification-card/certification-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [EducationCardComponent, CertificationCardComponent, TranslateModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  protected readonly educations = inject(ResumeDataService).educations;
  protected readonly certifications = inject(ResumeDataService).certifications;
}
