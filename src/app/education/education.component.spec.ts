import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { ResumeDataService } from '../core/services/resume-data.service';
import { Education } from '../core/models/resume.models';
import { computed } from '@angular/core';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  const mockEducations: Education[] = [
    {
      institution: 'Uni 1',
      degree: 'Degree 1',
      startDate: '2010',
      endDate: '2014',
      location: 'Loc 1',
    },
    {
      institution: 'Uni 2',
      degree: 'Degree 2',
      startDate: '2014',
      endDate: '2016',
      location: 'Loc 2',
    },
  ];

  const mockResumeDataService = {
    educations: computed(() => mockEducations),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent],
      providers: [{ provide: ResumeDataService, useValue: mockResumeDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render education cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('app-education-card');
    expect(cards.length).toBe(mockEducations.length);
  });
});
