import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/experience', pathMatch: 'full' },
];
