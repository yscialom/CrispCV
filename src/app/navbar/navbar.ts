import { Component, inject } from '@angular/core';
import { ResumeDataService } from '../core/services/resume-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],

  standalone: true,
})
export class NavbarComponent {
  protected readonly profile = inject(ResumeDataService).profile;
}
