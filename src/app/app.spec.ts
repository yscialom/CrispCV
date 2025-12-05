import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { ResumeDataService } from './core/services/resume-data.service';
import { signal, computed } from '@angular/core';

describe('App', () => {
  // Mock ResumeDataService
  const mockProfile = signal({
    name: 'Mock John Doe',
    title: 'Mock Senior Software Engineer',
    summary: 'Mock A passionate and experienced software engineer.',
    profilePicturePath: 'mock/path/to/image.jpg',
    email: 'mock@example.com',
    phone: 'mock-123-456-7890',
    website: 'http://mock.com',
    location: 'Mock City',
  });

  const mockResumeDataService = {
    profile: computed(() => mockProfile()),
    // Add other mocked properties if App directly uses them
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [{ provide: ResumeDataService, useValue: mockResumeDataService }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Mock John Doe');
  });
});
