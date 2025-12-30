import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-resume-entry',
  standalone: true,
  templateUrl: './resume-entry.component.html',
  styleUrl: './resume-entry.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeEntryComponent {
  public readonly title = input.required<string>();
  public readonly subtitle = input.required<string>();
  public readonly location = input.required<string>();
  public readonly dateRange = input.required<string>();
}
