import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutDescriptionComponent } from './about-description.component';
import { ResumeDataService } from '../../../core/services/resume-data.service';
import { signal } from '@angular/core';
import { Profile } from '../../../core/models/resume.models';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';

describe('AboutDescriptionComponent', () => {
  let component: AboutDescriptionComponent;
  let fixture: ComponentFixture<AboutDescriptionComponent>;

  const mockProfile: Profile = {
    email: '',
    phone: '',
    website: '',
    location: '',
    birthDate: '',
    nationality: '',
    drivingLicense: '',
    languages: [],
    socialLinks: [{ platform: 'LinkedIn', url: 'https://linkedin.com' }],
    volunteering: [],
    hobbies: [],
    aboutDescription: '# Hello World',
    personalProjects: [],
  };

  const mockResumeDataService = {
    profile: signal(mockProfile),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDescriptionComponent, TranslateModule.forRoot(), MarkdownPipe],
      providers: [{ provide: ResumeDataService, useValue: mockResumeDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display description rendered as markdown', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // MarkdownPipe transforms '# Hello World' to '<h1>Hello World</h1>' (roughly)
    expect(compiled.innerHTML).toContain('Hello World');
  });

  it('should display social links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('LinkedIn');
  });
});
