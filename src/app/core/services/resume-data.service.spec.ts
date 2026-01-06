import { TestBed } from '@angular/core/testing';
import { ResumeDataService } from './resume-data.service';
import { PROFILE_CONFIG } from '../../../../config/profile';
import { Resume } from '../../core/models/resume.models';

describe('ResumeDataService', () => {
  let service: ResumeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
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
