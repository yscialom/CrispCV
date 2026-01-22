import { ChangeDetectionStrategy, Component, inject, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
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
  private readonly translate = inject(TranslateService);
  private readonly appConfigService = inject(AppConfigService);
  private readonly keywordService = inject(KeywordService);
  // Inject services to ensure they are initialized
  private readonly resumeDataService = inject(ResumeDataService);
  private readonly themeService = inject(ThemeService);

  constructor() {
    effect(() => {
      const profile = this.resumeDataService.profile();
      this.translate.get('COMMON.PAGE_TITLE', { name: profile.name }).subscribe((title: string) => {
        this.titleService.setTitle(title);
      });
    });
  }

  protected resetKeywordFilter(): void {
    this.keywordService.selectedKeyword.set(null);
  }
}
