import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { AppConfigService } from './core/services/app-config.service';
import { TranslateService } from '@ngx-translate/core';
import { SUPPORTED_LANGUAGES } from './core/profile.registry';
import { KeywordService } from './core/services/keyword.service';
import { PrintLayoutComponent } from './core/components/print-layout/print-layout.component';

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
  private readonly document = inject(DOCUMENT);
  private readonly translate = inject(TranslateService);
  private readonly keywordService = inject(KeywordService);

  constructor() {
    this.titleService.setTitle(this.appConfigService.appConfig.appTitle);
    this.document.body.classList.add(`theme-${this.appConfigService.appConfig.defaultTheme}`);

    this.translate.addLangs(SUPPORTED_LANGUAGES);
    this.translate.setDefaultLang('fr_FR');

    const browserLang = this.translate.getBrowserLang();
    const matchingLang = SUPPORTED_LANGUAGES.find((l) => l.startsWith(browserLang || ''));
    this.translate.use(matchingLang || 'fr_FR');
  }

  protected resetKeywordFilter(): void {
    this.keywordService.selectedKeyword.set(null);
  }
}
