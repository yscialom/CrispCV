import {
  Component,
  inject,
  signal,
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
  protected readonly isSticky = signal(false);

  @ViewChild('sentinel') sentinel!: ElementRef<HTMLDivElement>;
  private observer: IntersectionObserver | undefined;

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          this.isSticky.set(!entry.isIntersecting);
        },
        { threshold: 0 },
      );
      this.observer.observe(this.sentinel.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
