import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { ResumeDataService } from '../core/services/resume-data.service';
import { Experience } from '../core/models/resume.models';
import { computed } from '@angular/core';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  const mockExperiences: Experience[] = [
    {
      title: 'Test Job',
      company: 'Test Co',
      location: 'City',
      startDate: '2022',
      endDate: '2023',
      description: ['Work'],
    },
  ];

  const mockResumeDataService = {
    experiences: computed(() => mockExperiences),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [{ provide: ResumeDataService, useValue: mockResumeDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render experience items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Check if the child component is rendered (by checking for its selector or content)
    expect(compiled.querySelector('app-experience-item')).toBeTruthy();
  });
});
