import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ResumeDataService } from './core/services/resume-data.service';
import { ThemeService } from './core/services/theme.service';
import { Profile } from './core/models/resume.models';
import { signal, computed } from '@angular/core';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { TranslateModule } from '@ngx-translate/core';
import { KeywordService } from './core/services/keyword.service';

describe('AppComponent', () => {
  let keywordService: KeywordService;
  // Mock ResumeDataService
  const mockProfile = signal<Profile>({
    name: 'Mock John Doe',
    title: 'Mock Senior Software Engineer',
    summary: 'Mock A passionate and experienced software engineer.',
    profilePicturePath: 'mock/path/to/image.jpg',
    email: 'mock@example.com',
    phone: 'mock-123-456-7890',
    website: 'http://mock.com',
    location: 'Mock City',
  });

  const mockResumeDataService = {
    profile: computed<Profile>(() => mockProfile()),
    getSupportedLanguages: vi.fn().mockReturnValue(['fr_FR', 'en_US']),
    currentLocale: signal('fr_FR'),
  };

  const mockThemeService = {
    theme: signal('dark'),
    toggleTheme: vi.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, TranslateModule.forRoot()],
      providers: [
        { provide: ResumeDataService, useValue: mockResumeDataService },
        { provide: ThemeService, useValue: mockThemeService },
        provideRouter([]),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Mock John Doe');
  });

  it('should reset keyword filter on document click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    keywordService = TestBed.inject(KeywordService);

    keywordService.selectedKeyword.set('SomeKeyword');
    expect(keywordService.selectedKeyword()).toBe('SomeKeyword');

    document.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();

    expect(keywordService.selectedKeyword()).toBeNull();
  });
});
