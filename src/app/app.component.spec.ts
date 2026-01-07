import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ResumeDataService } from './core/services/resume-data.service';
import { ThemeService } from './core/services/theme.service';
import { Profile } from './core/models/resume.models';
import { signal, computed } from '@angular/core';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { TranslateModule } from '@ngx-translate/core';

describe('AppComponent', () => {
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
});
