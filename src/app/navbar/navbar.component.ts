import {
  Component,
  inject,
  signal,
  computed,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ResumeDataService } from '../core/services/resume-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  protected readonly profile = inject(ResumeDataService).profile;

  private readonly isScrolled = signal(false);
  private readonly isPageTallEnough = signal(true);

  protected readonly isSticky = computed(() => this.isScrolled() && this.isPageTallEnough());

  @ViewChild('sentinel') sentinel!: ElementRef<HTMLDivElement>;
  private intersectionObserver: IntersectionObserver | undefined;
  private resizeObserver: ResizeObserver | undefined;

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver !== 'undefined') {
      this.intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          this.isScrolled.set(!entry.isIntersecting);
        },
        { threshold: 0 },
      );
      this.intersectionObserver.observe(this.sentinel.nativeElement);
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
    this.intersectionObserver?.disconnect();
    this.resizeObserver?.disconnect();
  }
}
