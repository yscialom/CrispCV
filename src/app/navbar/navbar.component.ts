import {
  Component,
  inject,
  signal,
  computed,
  OnDestroy,
  afterNextRender,
  PLATFORM_ID,
  ChangeDetectionStrategy,
  effect,
  untracked,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { ResumeDataService } from '../core/services/resume-data.service';
import { ThemeSwitchComponent } from './ui/theme-switch/theme-switch.component';
import { LanguageSwitchComponent } from './ui/language-switch/language-switch.component';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs';

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
  protected readonly resumeDataService = inject(ResumeDataService);
  protected readonly profile = this.resumeDataService.profile;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);

  private readonly isScrolled = signal(false);
  private readonly isPageTallEnough = signal(true);
  private readonly currentUrl = signal(this.router.url);

  protected readonly isSticky = computed(() => this.isScrolled() && this.isPageTallEnough());
  protected readonly isMenuOpen = signal(false);

  protected readonly currentPageLabel = computed(() => {
    const url = this.currentUrl();
    if (url.includes('/education')) return 'NAVBAR.EDUCATION';
    if (url.includes('/about')) return 'NAVBAR.ABOUT';
    return 'NAVBAR.EXPERIENCE';
  });

  private resizeObserver: ResizeObserver | undefined;
  private scrollListener: (() => void) | undefined;

  constructor() {
    effect(() => {
      // Close menu when language changes
      this.resumeDataService.currentLocale();
      untracked(() => this.isMenuOpen.set(false));
    });

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentUrl.set(event.urlAfterRedirects);
      });

    afterNextRender(() => {
      this.scrollListener = () => {
        const y = window.scrollY;
        // Hysteresis: prevent flickering at the boundary
        if (this.isScrolled()) {
          if (y < 5) this.isScrolled.set(false);
        } else {
          if (y > 20) this.isScrolled.set(true);
        }
      };
      window.addEventListener('scroll', this.scrollListener, { passive: true });

      // Initial check
      this.isScrolled.set(window.scrollY > 20);

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

  protected toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected print(): void {
    window.print();
  }

  private checkPageHeight(): void {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    // Ensure we have enough scrollable content to justify shrinking.
    // Navbar shrinks by ~100px. Safety buffer prevents loops.
    const threshold = 150;

    // If currently sticky, the navbar is shrunk. We need to account for that to avoid flapping.
    const effectiveScrollHeight = this.isSticky() ? scrollHeight + threshold : scrollHeight;

    this.isPageTallEnough.set(effectiveScrollHeight > clientHeight + threshold);
  }

  ngOnDestroy(): void {
    if (this.scrollListener && isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    this.resizeObserver?.disconnect();
  }
}
