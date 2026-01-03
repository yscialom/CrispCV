import {
  Component,
  inject,
  signal,
  computed,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ResumeDataService } from '../core/services/resume-data.service';
import { ThemeSwitchComponent } from './ui/theme-switch/theme-switch.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeSwitchComponent],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  protected readonly profile = inject(ResumeDataService).profile;

  private readonly isScrolled = signal(false);
  private readonly isPageTallEnough = signal(true);

  protected readonly isSticky = computed(() => this.isScrolled() && this.isPageTallEnough());

  private resizeObserver: ResizeObserver | undefined;
  private scrollListener: (() => void) | undefined;

  constructor() {
    // Determine platform if needed, but for now assuming browser or handling safe check
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.scrollListener = () => {
        this.isScrolled.set(window.scrollY > 0);
      };
      window.addEventListener('scroll', this.scrollListener, { passive: true });
      
      // Initial check
      this.isScrolled.set(window.scrollY > 0);
    }

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.checkPageHeight();
      });
      this.resizeObserver.observe(document.documentElement);
      // Check initially
      this.checkPageHeight();
    }
  }

  private checkPageHeight(): void {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    // Threshold to prevent loop: must be > viewport + navbar shrink amount (approx 66px)
    const threshold = 100;
    this.isPageTallEnough.set(scrollHeight > clientHeight + threshold);
  }

  ngOnDestroy(): void {
    if (this.scrollListener && typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.scrollListener);
    }
    this.resizeObserver?.disconnect();
  }
}
