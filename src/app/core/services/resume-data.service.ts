import { Injectable, signal, computed } from '@angular/core';
import { Resume, Profile, Experience, Education, Skill } from '../../core/models/resume.models';
import { PROFILE_CONFIG } from '../../../../config/profile';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  private readonly resumeConfig = signal<Resume>(PROFILE_CONFIG as Resume);

  public readonly profile = computed<Profile>(() => this.resumeConfig() as Profile);
  public readonly experiences = computed<Experience[]>(() => this.resumeConfig().experiences);
  public readonly educations = computed<Education[]>(() => this.resumeConfig().educations);
  public readonly skills = computed<Skill[]>(() => this.resumeConfig().skills);
}
