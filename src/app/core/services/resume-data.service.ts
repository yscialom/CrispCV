import { Injectable, signal, computed } from '@angular/core';
import { Resume } from '../../core/models/resume.models';
import { PROFILE_CONFIG } from '../../../../config/profile'; // Corrected path
import { RESUME_DATA } from '../../data/resume.data';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  private readonly resume = signal<Resume>(RESUME_DATA);

  public readonly profile = computed(() => ({
    profilePicturePath: PROFILE_CONFIG.profilePicturePath,
    name: PROFILE_CONFIG.name,
    title: PROFILE_CONFIG.title,
    summary: PROFILE_CONFIG.summary,
    ...this.resume().profile,
  }));
  public readonly experiences = computed(() => this.resume().experiences);
  public readonly educations = computed(() => this.resume().educations);
  public readonly skills = computed(() => this.resume().skills);
}
