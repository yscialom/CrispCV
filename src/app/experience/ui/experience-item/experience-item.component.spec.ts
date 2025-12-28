import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceItemComponent } from './experience-item.component';
import { Experience } from '../../../core/models/resume.models';

describe('ExperienceItemComponent', () => {
  let component: ExperienceItemComponent;
  let fixture: ComponentFixture<ExperienceItemComponent>;

  const mockExperience: Experience = {
    title: 'Test Title',
    company: 'Test Company',
    location: 'Test Location',
    startDate: '2020-01',
    endDate: 'Present',
    description: ['Desc 1', 'Desc 2'],
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

  it('should display experience details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Test Title');
    expect(compiled.querySelector('.company')?.textContent).toContain('Test Company');
    expect(compiled.querySelector('.location')?.textContent).toContain('Test Location');
    expect(compiled.querySelector('.dates')?.textContent).toContain('2020-01 - Present');
    const items = compiled.querySelectorAll('li');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toContain('Desc 1');
  });
});
