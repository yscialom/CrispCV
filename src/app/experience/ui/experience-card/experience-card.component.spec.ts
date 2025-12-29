import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceCardComponent } from './experience-card.component';
import { Experience } from '../../../core/models/resume.models';

describe('ExperienceCardComponent', () => {
  let component: ExperienceCardComponent;
  let fixture: ComponentFixture<ExperienceCardComponent>;

  const mockExperience: Experience = {
    title: 'Test Title',
    company: 'Test Company',
    location: 'Test Location',
    startDate: '2020-01',
    endDate: '2021-02', // 14 months inclusive
    missions: [{ title: 'Mission 1', description: 'Desc 1' }],
    keywords: ['Key1', 'Key2'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('experience', mockExperience);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate and display duration correctly (approx half year)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // 2020-01 to 2021-02 is 14 months inclusive -> 1.166 years -> approx 1 year
    expect(component.duration()).toBe('1 an');
    expect(compiled.querySelector('.experience-card__dates')?.textContent).toContain('(1 an)');
  });

  it('should calculate 1.5 years correctly', () => {
    const exp: Experience = {
      ...mockExperience,
      startDate: '2020-01',
      endDate: '2021-04', // 16 months -> 1.33 years -> 1.5 years
    };
    fixture.componentRef.setInput('experience', exp);
    fixture.detectChanges();
    // Using fr-FR locale, decimal separator is a comma
    expect(component.duration()).toBe('1,5 an');
  });

  it('should handle "Present" end date', () => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 2;
    const exp: Experience = {
      ...mockExperience,
      startDate: `${startYear}-01`,
      endDate: 'Present',
    };
    fixture.componentRef.setInput('experience', exp);
    fixture.detectChanges();

    const duration = component.duration();
    expect(duration).toMatch(/\d+([.,]\d+)? (an|ans|mois)/);
  });

  it('should handle only months (< 1 year)', () => {
    const exp: Experience = {
      ...mockExperience,
      startDate: '2020-01',
      endDate: '2020-05', // 5 months
    };
    fixture.componentRef.setInput('experience', exp);
    fixture.detectChanges();

    expect(component.duration()).toBe('5 mois');
  });

  it('should round to full years if > 10 years', () => {
    const exp: Experience = {
      ...mockExperience,
      startDate: '2010-01',
      endDate: '2022-03', // 12 years 3 months -> 12.25 years -> 12 years
    };
    fixture.componentRef.setInput('experience', exp);
    fixture.detectChanges();

    expect(component.duration()).toBe('12 ans');
  });

  it('should render missions correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const missionElements = compiled.querySelectorAll('.experience-card__mission');
    expect(missionElements.length).toBe(1);
    expect(
      missionElements[0].querySelector('.experience-card__mission-title')?.textContent,
    ).toContain('Mission 1');
    expect(
      missionElements[0].querySelector('.experience-card__mission-description')?.textContent,
    ).toContain('Desc 1');
  });

  it('should render keywords correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const keywordElements = compiled.querySelectorAll('.experience-card__keyword');
    expect(keywordElements.length).toBe(2);
    expect(keywordElements[0].textContent).toContain('Key1');
    expect(keywordElements[1].textContent).toContain('Key2');
  });

  it('should not render keywords section if no keywords provided', () => {
    const exp: Experience = {
      ...mockExperience,
      keywords: undefined,
    };
    fixture.componentRef.setInput('experience', exp);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.experience-card__keywords')).toBeFalsy();
  });

  it('should render markdown in mission description', () => {
    const exp: Experience = {
      ...mockExperience,
      missions: [{ title: 'M1', description: 'This is **bold** text' }],
    };
    fixture.componentRef.setInput('experience', exp);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const descElement = compiled.querySelector('.experience-card__mission-description');
    expect(descElement?.innerHTML).toContain('<strong>bold</strong>');
  });
});
