import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ResumeDataService } from '../core/services/resume-data.service';
import { ExperienceItemComponent } from './ui/experience-item/experience-item.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  private readonly resumeDataService = inject(ResumeDataService);
  protected readonly experiences = this.resumeDataService.experiences;
}