import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent {
  protected readonly themeService = inject(ThemeService);
}
