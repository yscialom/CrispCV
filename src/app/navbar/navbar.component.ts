import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ResumeDataService } from '../core/services/resume-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  protected readonly profile = inject(ResumeDataService).profile;
  protected readonly isSticky = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isSticky.set(window.scrollY > 0);
  }
}
