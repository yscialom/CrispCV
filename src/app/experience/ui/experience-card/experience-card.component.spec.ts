import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceCardComponent } from './experience-card.component';
import { Experience } from '../../../core/models/resume.models';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { vi } from 'vitest';
import { APP_BASE_HREF } from '@angular/common';

describe('ExperienceCardComponent', () => {
  let component: ExperienceCardComponent;
  let fixture: ComponentFixture<ExperienceCardComponent>;
  let translate: TranslateService;

  const mockExperience: Experience = {
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'Silicon Valley',
    startDate: '2020-01',
    endDate: '2021-02', // 14 months -> 1 year
    missions: [
      {
        title: 'Mission 1',
        description: 'Desc 1',
      },
    ],
    keywords: ['Key1', 'Key2'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceCardComponent, TranslateModule.forRoot()],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();

    translate = TestBed.inject(TranslateService);
    // Mock translate to return localized strings
    vi.spyOn(translate, 'instant').mockImplementation((key: string | string[]) => {
      if (key === 'COMMON.PRESENT') return 'Present';
      if (key === 'DURATION.YEAR_PLURAL') return 'ans';
      if (key === 'DURATION.YEAR_SINGULAR') return 'an';
      if (key === 'DURATION.MONTH') return 'mois';
      return key as string;
    });

    fixture = TestBed.createComponent(ExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('experience', mockExperience);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
    const keywordElements = compiled.querySelectorAll('.resume-entry__keyword');
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
    expect(compiled.querySelector('.resume-entry__keywords')).toBeFalsy();
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
