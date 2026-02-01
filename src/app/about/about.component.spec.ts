import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { ResumeDataService } from '../core/services/resume-data.service';
import { PermalinkService } from '../core/services/permalink.service';
import { signal } from '@angular/core';
import { Profile } from '../core/models/resume.models';
import { TranslateModule } from '@ngx-translate/core';
import { APP_BASE_HREF } from '@angular/common';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  const mockProfile: Profile = {
    email: 'test@example.com',
    phone: '123456789',
    website: 'example.com',
    location: 'Test City',
    birthDate: '1990-01-01',
    nationality: 'TestLand',
    drivingLicense: 'B',
    languages: [{ name: 'English', level: 5 }],
    socialLinks: [{ platform: 'LinkedIn', url: 'https://linkedin.com' }],
    volunteering: [{ organization: 'Test Org', role: 'Helper', startDate: '2020' }],
    hobbies: ['Coding'],
    aboutDescription: '# Hello',
    personalProjects: [{ name: 'Project 1', description: 'Desc', url: 'http://proj1.com' }],
  };

  const mockResumeDataService = {
    profile: signal(mockProfile),
  };

  const mockPermalinkService = {
    getEntryByItem: () => ({ id: 1, fragment: 'test' }),
    activeFragment: signal(null),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent, TranslateModule.forRoot()],
      providers: [
        { provide: ResumeDataService, useValue: mockResumeDataService },
        { provide: PermalinkService, useValue: mockPermalinkService },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Since AboutComponent now uses child components, checking textContent is an integration test.
  // It verifies that child components are correctly rendered.

  it('should render child component content (personal info)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('TestLand');
  });

  it('should render child component content (description)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Hello'); // Markdown render
  });

  it('should display volunteering', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Org');
    expect(compiled.textContent).toContain('Helper');
  });

  it('should display projects', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Project 1');
  });
});
