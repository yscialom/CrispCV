import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { Title } from '@angular/platform-browser';
import { AppConfigService } from './core/services/app-config.service';
import { KeywordService } from './core/services/keyword.service';
import { PrintLayoutComponent } from './core/components/print-layout/print-layout.component';
import { ResumeDataService } from './core/services/resume-data.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ToastComponent, PrintLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'resetKeywordFilter()',
  },
})
export class AppComponent {
  private readonly titleService = inject(Title);
  private readonly appConfigService = inject(AppConfigService);
  private readonly keywordService = inject(KeywordService);
  // Inject services to ensure they are initialized
  private readonly resumeDataService = inject(ResumeDataService);
  private readonly themeService = inject(ThemeService);

  constructor() {
    this.titleService.setTitle(this.appConfigService.appConfig.appTitle);
  }

  protected resetKeywordFilter(): void {
    this.keywordService.selectedKeyword.set(null);
  }
}
