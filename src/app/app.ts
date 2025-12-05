import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { Title } from '@angular/platform-browser';
import { AppConfigService } from './core/services/app-config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly titleService = inject(Title);
  private readonly appConfigService = inject(AppConfigService);

  constructor() {
    this.titleService.setTitle(this.appConfigService.appConfig.appTitle);
  }
}
