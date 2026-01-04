import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { AppConfigService } from './core/services/app-config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly titleService = inject(Title);
  private readonly appConfigService = inject(AppConfigService);
  private readonly document = inject(DOCUMENT);

  constructor() {
    this.titleService.setTitle(this.appConfigService.appConfig.appTitle);
    this.document.body.classList.add(`theme-${this.appConfigService.appConfig.defaultTheme}`);
  }
}
