import { TestBed } from '@angular/core/testing';
import { PermalinkService } from './permalink.service';
import { ResumeDataService } from './resume-data.service';
import { Resume } from '../models/resume.models';
import { signal } from '@angular/core';

describe('PermalinkService', () => {
  let service: PermalinkService;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockResumeDataService: any;

  const mockResumeData: Resume = {
    email: 'test@test.com',
    phone: '123',
    website: 'site.com',
    location: 'Loc',
    experiences: [
      {
        title: 'Dev',
        company: 'Google',
        location: 'Paris',
        startDate: '2020-01-01',
        endDate: '2021-01-01',
        missions: [],
      },
      {
        title: 'Lead',
        company: 'Amazon',
        location: 'Remote',
        startDate: '2018-01-01', // Older than Google
        endDate: '2020-01-01',
        missions: [],
      },
      {
        title: 'Intern', // Same start date as Amazon to test sorting/stability
        company: 'Startup',
        location: 'Remote',
        startDate: '2018-01-01',
        endDate: '2018-06-01',
        missions: [],
      },
    ],
    educations: [
      {
        degree: 'Master',
        institution: 'MIT',
        location: 'Boston',
        startDate: '2016-01-01', // Oldest
        endDate: '2018-01-01',
      },
    ],
    skills: [],
    personalProjects: [
      {
        name: 'MyProject',
        description: 'Desc',
        startDate: '2022-01-01', // Newest
      },
    ],
  };

  beforeEach(() => {
    mockResumeDataService = {
      resumeConfig: signal(mockResumeData),
      experiences: signal(mockResumeData.experiences),
      educations: signal(mockResumeData.educations),
      profile: signal(mockResumeData),
    };

    TestBed.configureTestingModule({
      providers: [
        PermalinkService,
        { provide: ResumeDataService, useValue: mockResumeDataService },
      ],
    });
    service = TestBed.inject(PermalinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('ID Generation and Mapping', () => {
    it('should assign unique IDs to all items sorted chronologically (oldest first)', () => {
      // Expected Order based on start dates:
      // 1. Education (MIT) - 2016
      // 2. Experience (Amazon or Startup) - 2018 (Stable sort check)
      // 3. Experience (Amazon or Startup) - 2018
      // 4. Experience (Google) - 2020
      // 5. Project (MyProject) - 2022

      const map = service.getPermalinkMap();
      expect(map.size).toBe(5);

      const educationEntry = Array.from(map.values()).find((e) => e.type === 'education');
      expect(educationEntry?.id).toBe(1);
      expect(educationEntry?.fragment).toBe('mit-master-2016-01-01-1');

      const projectEntry = Array.from(map.values()).find((e) => e.type === 'project');
      expect(projectEntry?.id).toBe(5);
      expect(projectEntry?.fragment).toBe('myproject-5');
    });

    it('should generate correct fragments for different types', () => {
      // ID might differ if sort order of same-date items varies, but let's check basic slug formation
      // We'll rely on getEntryById for precise checks if we know the ID order

      const map = service.getPermalinkMap();
      const googleEntry = Array.from(map.values()).find((e) => e.fragment.startsWith('google'));
      expect(googleEntry).toBeTruthy();
      expect(googleEntry?.fragment).toMatch(/^google-2020-01-01-\d+$/);
    });

    it('should handle same start dates consistently', () => {
      const map = service.getPermalinkMap();
      const amazon = Array.from(map.values()).find((e) => e.fragment.includes('amazon'));
      const startup = Array.from(map.values()).find((e) => e.fragment.includes('startup'));

      expect(amazon).toBeTruthy();
      expect(startup).toBeTruthy();
      expect(amazon?.id).not.toBe(startup?.id);
    });
  });

  describe('Resolution', () => {
    it('should return null for non-existent ID', () => {
      expect(service.resolveId(999)).toBeNull();
    });

    it('should resolve valid ID to route and fragment', () => {
      // MIT is ID 1
      const result = service.resolveId(1);
      expect(result).toEqual({
        route: '/education',
        fragment: 'mit-master-2016-01-01-1',
      });
    });

    it('should resolve project ID to /about', () => {
      // MyProject is ID 5
      const result = service.resolveId(5);
      expect(result).toEqual({
        route: '/about',
        fragment: 'myproject-5',
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty resume config gracefully', () => {
      mockResumeDataService.resumeConfig.set({
        ...mockResumeData,
        experiences: [],
        educations: [],
        personalProjects: [],
      });
      mockResumeDataService.experiences.set([]);
      mockResumeDataService.educations.set([]);
      mockResumeDataService.profile.set({ ...mockResumeData, personalProjects: [] });

      // Re-inject or re-initialize logic if it's computed in constructor/init
      // For now, assuming reactive signal usage in service
      const map = service.getPermalinkMap();
      expect(map.size).toBe(0);
    });
  });
});
