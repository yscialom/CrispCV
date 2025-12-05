import { Injectable, signal, computed } from '@angular/core';
import { Resume, Profile } from '../../core/models/resume.models';
import { PROFILE_CONFIG } from '../../../../config/profile';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  private readonly resumeConfig = signal<Resume>(PROFILE_CONFIG as Resume);

  // Directly expose parts of PROFILE_CONFIG via resumeConfig signal
  public readonly profile = computed<Profile>(() => {
    const config = this.resumeConfig();
    return {
      name: config.name,
      title: config.title,
      summary: config.summary,
      email: config.email,
      phone: config.phone,
      website: config.website,
      location: config.location,
      profilePicturePath: config.profilePicturePath,
    };
  });
  public readonly experiences = computed(() => this.resumeConfig().experiences);
  public readonly educations = computed(() => this.resumeConfig().educations);
  public readonly skills = computed(() => this.resumeConfig().skills);
}
