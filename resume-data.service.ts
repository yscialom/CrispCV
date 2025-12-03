import { Injectable, signal, computed } from '@angular/core';
import { Resume } from './resume.models';
import { RESUME_DATA } from './resume.data';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  private readonly resume = signal<Resume>(RESUME_DATA);

  public readonly profile = computed(() => this.resume().profile);
  public readonly experiences = computed(() => this.resume().experiences);
  public readonly educations = computed(() => this.resume().educations);
  public readonly skills = computed(() => this.resume().skills);
}
