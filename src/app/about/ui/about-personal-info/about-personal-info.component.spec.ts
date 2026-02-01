import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutPersonalInfoComponent } from './about-personal-info.component';
import { ResumeDataService } from '../../../core/services/resume-data.service';
import { signal } from '@angular/core';
import { Profile } from '../../../core/models/resume.models';
import { TranslateModule } from '@ngx-translate/core';

describe('AboutPersonalInfoComponent', () => {
  let component: AboutPersonalInfoComponent;
  let fixture: ComponentFixture<AboutPersonalInfoComponent>;

  const mockProfile: Profile = {
    email: 'test@example.com',
    phone: '123456789',
    website: 'example.com',
    location: 'Test City',
    birthDate: '1990-01-01',
    nationality: 'TestLand',
    drivingLicense: 'B',
    languages: [{ name: 'English', level: 5 }],
    socialLinks: [],
    volunteering: [],
    hobbies: ['Coding'],
    aboutDescription: '',
    personalProjects: [],
  };

  const mockResumeDataService = {
    profile: signal(mockProfile),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPersonalInfoComponent, TranslateModule.forRoot()],
      providers: [{ provide: ResumeDataService, useValue: mockResumeDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPersonalInfoComponent);
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
    expect(compiled.textContent).toContain('test@example.com');
  });

  it('should display languages', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('English');
  });

  it('should display hobbies', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Coding');
  });

  it('should calculate age correctly', () => {
    const dob = new Date('1990-01-01');
    const today = new Date();
    let expectedAge = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      expectedAge--;
    }

    expect(component.age()).toBe(expectedAge);
  });
});
