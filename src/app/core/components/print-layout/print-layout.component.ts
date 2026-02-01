import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';
import { AboutPersonalInfoComponent } from '../../../about/ui/about-personal-info/about-personal-info.component';
import { AboutDescriptionComponent } from '../../../about/ui/about-description/about-description.component';
import { ExperienceComponent } from '../../../experience/experience.component';
import { EducationComponent } from '../../../education/education.component';
import { AboutComponent } from '../../../about/about.component';

@Component({
  selector: 'app-print-layout',
  standalone: true,
  imports: [
    AboutPersonalInfoComponent,
    AboutDescriptionComponent,
    ExperienceComponent,
    EducationComponent,
    AboutComponent,
  ],
  templateUrl: './print-layout.component.html',
  styleUrl: './print-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintLayoutComponent {
  private readonly resumeDataService = inject(ResumeDataService);
  protected readonly profile = this.resumeDataService.profile;
}
