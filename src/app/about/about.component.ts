import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ResumeDataService } from '../core/services/resume-data.service';
import { ResumeEntryComponent } from '../shared/components/resume-entry/resume-entry.component';
import { PermalinkService } from '../core/services/permalink.service';
import { Experience, Education, Project, Volunteering } from '../core/models/resume.models';
import { TranslateModule } from '@ngx-translate/core';
import { AboutPersonalInfoComponent } from './ui/about-personal-info/about-personal-info.component';
import { AboutDescriptionComponent } from './ui/about-description/about-description.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ResumeEntryComponent,
    TranslateModule,
    AboutPersonalInfoComponent,
    AboutDescriptionComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  private resumeDataService = inject(ResumeDataService);
  private permalinkService = inject(PermalinkService);

  profile = this.resumeDataService.profile;

  volunteering = computed(() => this.profile().volunteering || []);
  personalProjects = computed(() => this.profile().personalProjects || []);

  getPermalink(item: Experience | Education | Project | Volunteering) {
    return this.permalinkService.getEntryByItem(item);
  }
}
