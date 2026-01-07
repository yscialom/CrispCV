import { TestBed } from '@angular/core/testing';
import { ResumeDataService } from './resume-data.service';
import { PROFILE_CONFIG } from '../../../../config/profile.fr_FR';
import { Resume } from '../../core/models/resume.models';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { EventEmitter } from '@angular/core';

describe('ResumeDataService', () => {
  let service: ResumeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        ResumeDataService,
        {
          provide: TranslateService,
          useValue: {
            currentLang: 'fr_FR',
            onLangChange: new EventEmitter(),
          },
        },
      ],
    });
    service = TestBed.inject(ResumeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return profile data from configuration', () => {
    const profile = service.profile();
    expect(profile).toEqual(PROFILE_CONFIG as Resume);
  });

  it('should return experiences data from configuration', () => {
    const experiences = service.experiences();
    expect(experiences).toEqual((PROFILE_CONFIG as Resume).experiences);
  });

  it('should return educations data from configuration', () => {
    const educations = service.educations();
    expect(educations).toEqual((PROFILE_CONFIG as Resume).educations);
  });

  it('should return skills data from configuration', () => {
    const skills = service.skills();
    expect(skills).toEqual((PROFILE_CONFIG as Resume).skills);
  });
});
