import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ResumeDataService } from '../../../resume-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class NavbarComponent {
  protected readonly profile = inject(ResumeDataService).profile;
}
