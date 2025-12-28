import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Experience } from '../../../core/models/resume.models';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent {
  public readonly experience = input.required<Experience>();
}
