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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly titleService = inject(Title);
  private readonly appConfigService = inject(AppConfigService);
  private readonly document = inject(DOCUMENT);
  private readonly translate = inject(TranslateService);

  constructor() {
    this.titleService.setTitle(this.appConfigService.appConfig.appTitle);
    this.document.body.classList.add(`theme-${this.appConfigService.appConfig.defaultTheme}`);

    this.translate.addLangs(SUPPORTED_LANGUAGES);
    this.translate.setDefaultLang('fr_FR');

    const browserLang = this.translate.getBrowserLang();
    const matchingLang = SUPPORTED_LANGUAGES.find((l) => l.startsWith(browserLang || ''));
    this.translate.use(matchingLang || 'fr_FR');
  }
}
