import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationCardComponent } from './education-card.component';
import { Education } from '../../../core/models/resume.models';

describe('EducationCardComponent', () => {
  let component: EducationCardComponent;
  let fixture: ComponentFixture<EducationCardComponent>;

  const mockEducation: Education = {
    institution: 'Test University',
    degree: 'B.Sc. Computer Science',
    startDate: '2015',
    endDate: '2019',
    location: 'Test City',
    description: 'Learned **lots** of things.',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('education', mockEducation);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display education details correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.resume-entry__title')?.textContent).toContain(
      mockEducation.degree,
    );
    expect(compiled.querySelector('.resume-entry__subtitle')?.textContent).toContain(
      mockEducation.institution,
    );
    expect(compiled.querySelector('.resume-entry__location')?.textContent).toContain(
      mockEducation.location,
    );
    expect(compiled.querySelector('.resume-entry__dates')?.textContent).toContain(
      `${mockEducation.startDate} - ${mockEducation.endDate}`,
    );
  });

  it('should render markdown description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const descriptionEl = compiled.querySelector('.education-card__description');
    expect(descriptionEl).toBeTruthy();
    expect(descriptionEl?.innerHTML).toContain('<strong>lots</strong>');
  });

  it('should not render description if not provided', () => {
    const educationWithoutDesc = { ...mockEducation, description: undefined };
    fixture.componentRef.setInput('education', educationWithoutDesc);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.education-card__description')).toBeFalsy();
  });
});
