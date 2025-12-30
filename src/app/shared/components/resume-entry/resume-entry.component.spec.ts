import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeEntryComponent } from './resume-entry.component';

describe('ResumeEntryComponent', () => {
  let component: ResumeEntryComponent;
  let fixture: ComponentFixture<ResumeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeEntryComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.componentRef.setInput('subtitle', 'Test Subtitle');
    fixture.componentRef.setInput('location', 'Test Location');
    fixture.componentRef.setInput('dateRange', '2020 - 2021');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render inputs correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.resume-entry__title')?.textContent).toContain('Test Title');
    expect(compiled.querySelector('.resume-entry__subtitle')?.textContent).toContain(
      'Test Subtitle',
    );
    expect(compiled.querySelector('.resume-entry__location')?.textContent).toContain(
      'Test Location',
    );
    expect(compiled.querySelector('.resume-entry__dates')?.textContent).toContain('2020 - 2021');
  });
});
