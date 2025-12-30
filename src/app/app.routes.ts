import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

export const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: '', redirectTo: '/experience', pathMatch: 'full' },
];
