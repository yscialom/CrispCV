import { Injectable, signal, computed } from '@angular/core';
import { Resume } from './resume.models';
import { PROFILE_CONFIG } from '../../config/profile'; // Adjust path
import { RESUME_DATA } from './resume.data';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  private readonly resume = signal<Resume>(RESUME_DATA);

  public readonly profile = computed(() => ({
    ...this.resume().profile,
    profilePicturePath: PROFILE_CONFIG.profilePicturePath
  }));
  public readonly experiences = computed(() => this.resume().experiences);
  public readonly educations = computed(() => this.resume().educations);
  public readonly skills = computed(() => this.resume().skills);
}
