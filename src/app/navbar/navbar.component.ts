import {
  Component,
  inject,
  signal,
  computed,
  OnDestroy,
  afterNextRender,
  PLATFORM_ID,
  ChangeDetectionStrategy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ResumeDataService } from '../core/services/resume-data.service';
import { ThemeSwitchComponent } from './ui/theme-switch/theme-switch.component';
import { LanguageSwitchComponent } from './ui/language-switch/language-switch.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ThemeSwitchComponent,
    LanguageSwitchComponent,
    TranslateModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnDestroy {
  protected readonly profile = inject(ResumeDataService).profile;
  private readonly platformId = inject(PLATFORM_ID);

  private readonly isScrolled = signal(false);
  private readonly isPageTallEnough = signal(true);

  protected readonly isSticky = computed(() => this.isScrolled() && this.isPageTallEnough());

  private resizeObserver: ResizeObserver | undefined;
  private scrollListener: (() => void) | undefined;

  constructor() {
    afterNextRender(() => {
      this.scrollListener = () => {
        this.isScrolled.set(window.scrollY > 0);
      };
      window.addEventListener('scroll', this.scrollListener, { passive: true });

      // Initial check
      this.isScrolled.set(window.scrollY > 0);

      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(() => {
          this.checkPageHeight();
        });
        this.resizeObserver.observe(document.documentElement);
        // Check initially
        this.checkPageHeight();
      }
    });
  }

  private checkPageHeight(): void {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    // Threshold to prevent loop: must be > viewport + navbar shrink amount (approx 66px)
    const threshold = 100;
    this.isPageTallEnough.set(scrollHeight > clientHeight + threshold);
  }

  ngOnDestroy(): void {
    if (this.scrollListener && isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    this.resizeObserver?.disconnect();
  }
}
