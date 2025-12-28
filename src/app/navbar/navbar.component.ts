import { Component, inject } from '@angular/core';
import { ResumeDataService } from '../core/services/resume-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

  standalone: true,
})
export class NavbarComponent {
  protected readonly profile = inject(ResumeDataService).profile;
}
