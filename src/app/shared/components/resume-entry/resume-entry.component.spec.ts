import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeEntryComponent } from './resume-entry.component';
import { ToastService } from '../../../core/services/toast.service';
import { PermalinkService } from '../../../core/services/permalink.service';
import { Router } from '@angular/router';
import { signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { APP_BASE_HREF } from '@angular/common';

describe('ResumeEntryComponent', () => {
  let component: ResumeEntryComponent;
  let fixture: ComponentFixture<ResumeEntryComponent>;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  let mockToastService: any;
  let mockPermalinkService: any;
  let mockRouter: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  beforeEach(async () => {
    mockToastService = {
      show: vi.fn(),
    };
    mockPermalinkService = {
      activeFragment: signal<string | null>(null),
    };
    mockRouter = {
      navigate: vi.fn().mockResolvedValue(true),
    };

    // Mock clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });

    await TestBed.configureTestingModule({
      imports: [ResumeEntryComponent, TranslateModule.forRoot()],
      providers: [
        { provide: ToastService, useValue: mockToastService },
        { provide: PermalinkService, useValue: mockPermalinkService },
        { provide: Router, useValue: mockRouter },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeEntryComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.componentRef.setInput('subtitle', 'Test Subtitle');
    fixture.componentRef.setInput('location', 'Test Location');
    fixture.componentRef.setInput('startDate', '2020');
    fixture.componentRef.setInput('endDate', '2021');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render basic inputs correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.resume-entry__title')?.textContent).toContain('Test Title');
    expect(compiled.querySelector('.resume-entry__subtitle')?.textContent).toContain(
      'Test Subtitle',
    );
    const dates = compiled.querySelector('.resume-entry__dates')?.textContent;
    expect(dates).toContain('2020');
    expect(dates).toContain('2021');
  });

  describe('Permalink Interaction', () => {
    it('should NOT show link button if permalinkId is not provided', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.resume-entry__permalink-btn')).toBeFalsy();
    });

    it('should show link button if permalinkId is provided', () => {
      fixture.componentRef.setInput('permalinkId', 42);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.resume-entry__permalink-btn')).toBeTruthy();
    });

    it('should copy short link and navigate to fragment when clicked', async () => {
      fixture.componentRef.setInput('permalinkId', 42);
      fixture.componentRef.setInput('permalinkFragment', 'test-fragment');
      fixture.detectChanges();

      const btn = fixture.nativeElement.querySelector('.resume-entry__permalink-btn');
      btn.click();

      // Wait for clipboard promise
      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining('/42'));
      expect(mockRouter.navigate).toHaveBeenCalledWith([], {
        fragment: 'test-fragment',
        replaceUrl: true,
      });
      expect(mockToastService.show).toHaveBeenCalledWith(expect.any(String), 'success');
    });
  });

  describe('Highlighting', () => {
    it('should apply is-highlighted class when fragment matches', () => {
      fixture.componentRef.setInput('permalinkFragment', 'active-frag');
      mockPermalinkService.activeFragment.set('active-frag');
      fixture.detectChanges();

      const article = fixture.nativeElement.querySelector('.resume-entry');
      expect(article.classList.contains('is-highlighted')).toBe(true);
    });

    it('should NOT apply is-highlighted class when fragment does NOT match', () => {
      fixture.componentRef.setInput('permalinkFragment', 'some-frag');
      mockPermalinkService.activeFragment.set('other-frag');
      fixture.detectChanges();

      const article = fixture.nativeElement.querySelector('.resume-entry');
      expect(article.classList.contains('is-highlighted')).toBe(false);
    });
  });
});