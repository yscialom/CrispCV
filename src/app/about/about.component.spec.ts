import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { ResumeDataService } from '../core/services/resume-data.service';
import { signal } from '@angular/core';
import { Profile } from '../core/models/resume.models';
import { MarkdownPipe } from '../shared/pipes/markdown.pipe';

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent, MarkdownPipe],
      providers: [{ provide: ResumeDataService, useValue: mockResumeDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display personal info', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('TestLand');
    expect(compiled.textContent).toContain('123456789');
  });

  it('should display languages', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('English');
  });

  it('should display hobbies', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Coding');
  });

  it('should display volunteering', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Org');
    expect(compiled.textContent).toContain('Helper');
  });

  it('should display personal projects', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Project 1');
  });
});
