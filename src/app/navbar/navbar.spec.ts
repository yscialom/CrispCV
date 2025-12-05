import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar';
import { Profile } from '../core/models/resume.models';
import { ResumeDataService } from '../core/services/resume-data.service';
import { signal, computed } from '@angular/core';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;

  // Mock ResumeDataService
  const mockProfile = signal<Profile>({
    name: 'Test Name',
    title: 'Test Title',
    summary: 'Test Summary',
    profilePicturePath: 'test/path/to/image.jpg',
    email: 'test@example.com',
    phone: '123-456-7890',
    website: 'http://test.com',
    location: 'Test City',
  });

  const mockResumeDataService = {
    profile: computed(() => mockProfile()),
    // Other properties of ResumeDataService if needed by NavbarComponent
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent], // Import standalone component
      providers: [{ provide: ResumeDataService, useValue: mockResumeDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detect changes to bind data
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display profile name, title, summary, and picture from ResumeDataService', () => {
    const compiled = fixture.nativeElement;

    // Check name
    expect(compiled.querySelector('h1').textContent).toContain(mockProfile().name);

    // Check title
    expect(compiled.querySelector('h2').textContent).toContain(mockProfile().title);

    // Check summary
    expect(compiled.querySelector('p').textContent).toContain(mockProfile().summary);

    // Check profile picture
    const imgElement: HTMLImageElement = compiled.querySelector('.profile-picture img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain(mockProfile().profilePicturePath);
  });
});
