import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceItemComponent } from './experience-item.component';
import { Experience } from '../../../../core/models/resume.models';

describe('ExperienceItemComponent', () => {
  let component: ExperienceItemComponent;
  let fixture: ComponentFixture<ExperienceItemComponent>;

  const mockExperience: Experience = {
    title: 'Test Title',
    company: 'Test Company',
    location: 'Test Location',
    startDate: '2020-01',
    endDate: '2021-02', // 1 year, 2 months inclusive
    description: ['Desc 1'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('experience', mockExperience);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate and display duration correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // 2020-01 to 2021-02 is 14 months inclusive -> 1 year 2 months
    expect(component.duration()).toBe('1 year 2 months');
    expect(compiled.querySelector('.dates')?.textContent).toContain('(1 year 2 months)');
  });

  it('should handle "Present" end date', () => {
    // Mock current date to be fixed for test if possible, but for now let's just check format
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 1;
    const exp: Experience = {
      ...mockExperience,
      startDate: `${startYear}-01`,
      endDate: 'Present',
    };
    fixture.componentRef.setInput('experience', exp);
    fixture.detectChanges();

    const duration = component.duration();
    expect(duration).toMatch(/\d+ year(s)?( \d+ month(s)?)?/);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.dates')?.textContent).toContain(duration);
  });

  it('should handle exact years', () => {
    const exp: Experience = {
      ...mockExperience,
      startDate: '2020-01',
      endDate: '2020-12', // 12 months -> 1 year
    };
    fixture.componentRef.setInput('experience', exp);
    fixture.detectChanges();

    expect(component.duration()).toBe('1 year');
  });

  it('should handle only months', () => {
    const exp: Experience = {
      ...mockExperience,
      startDate: '2020-01',
      endDate: '2020-05', // 5 months
    };
    fixture.componentRef.setInput('experience', exp);
    fixture.detectChanges();

    expect(component.duration()).toBe('5 months');
  });
});
