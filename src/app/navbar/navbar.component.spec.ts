import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { Profile } from '../core/models/resume.models';
import { ResumeDataService } from '../core/services/resume-data.service';
import { ThemeService } from '../core/services/theme.service';
import { signal, computed } from '@angular/core';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { TranslateModule } from '@ngx-translate/core';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;

  // Mock ResumeDataService
  const mockProfile = signal<Profile>({
    name: 'Test Name',
    title: 'Test Title',
    summary: 'Test Summary',
    profilePicturePath: 'test/path/to/image.jpg',
    email: 'test@example.com',
    phone: '123-456-7890',
    website: 'http://test.com',
    location: 'Test City',
  });

  const mockResumeDataService = {
    profile: computed<Profile>(() => mockProfile()),
    getSupportedLanguages: vi.fn().mockReturnValue(['fr_FR', 'en_US']),
  };

  const mockThemeService = {
    theme: signal('dark'),
    toggleTheme: vi.fn(),
  };

  let resizeCallback: ResizeObserverCallback;

  beforeEach(async () => {
    // Mock ResizeObserver
    /* eslint-disable @typescript-eslint/no-explicit-any */
    window.ResizeObserver = class {
      constructor(callback: ResizeObserverCallback) {
        resizeCallback = callback;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    } as unknown as typeof ResizeObserver;
    /* eslint-enable @typescript-eslint/no-explicit-any */

    await TestBed.configureTestingModule({
      imports: [NavbarComponent, TranslateModule.forRoot()], // Import standalone component
      providers: [
        { provide: ResumeDataService, useValue: mockResumeDataService },
        { provide: ThemeService, useValue: mockThemeService },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

    // Default to tall page
    vi.spyOn(document.documentElement, 'scrollHeight', 'get').mockReturnValue(2000);
    vi.spyOn(document.documentElement, 'clientHeight', 'get').mockReturnValue(800);

    // Mock window scrollY
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });

    fixture.detectChanges(); // Detect changes
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display profile name, title, summary, and picture from ResumeDataService', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(mockProfile().name);
    expect(compiled.querySelector('h2').textContent).toContain(mockProfile().title);
    expect(compiled.querySelector('p').textContent).toContain(mockProfile().summary);
    const imgElement: HTMLImageElement = compiled.querySelector('.profile-picture img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain(mockProfile().profilePicturePath);
  });

  it('should update isSticky signal on scroll', () => {
    // Check initial state (scrollY 0)
    expect(component['isSticky']()).toBe(false);

    // Scroll down
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).scrollY = 10;
    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    expect(component['isSticky']()).toBe(true);
    const header = fixture.nativeElement.querySelector('header');
    expect(header.classList.contains('is-sticky')).toBe(true);

    // Scroll back up
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).scrollY = 0;
    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    expect(component['isSticky']()).toBe(false);
    expect(header.classList.contains('is-sticky')).toBe(false);
  });

  it('should not be sticky if page is not tall enough', () => {
    // Mock page height to be short (equal to viewport)
    vi.spyOn(document.documentElement, 'scrollHeight', 'get').mockReturnValue(800);
    vi.spyOn(document.documentElement, 'clientHeight', 'get').mockReturnValue(800);

    // Trigger ResizeObserver to update isPageTallEnough
    resizeCallback([], {} as ResizeObserver);
    fixture.detectChanges();

    // Trigger scroll
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).scrollY = 10;
    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    // Should NOT be sticky because page is short
    expect(component['isSticky']()).toBe(false);
    const header = fixture.nativeElement.querySelector('header');
    expect(header.classList.contains('is-sticky')).toBe(false);
  });
});
