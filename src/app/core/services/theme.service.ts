import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { APP_CONFIG } from '../../../../config/app.config';

export type Theme = 'light' | 'dark';

interface PersistedTheme {
  theme: Theme;
  expiry: number;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private readonly EXPIRY_MS = 3 * 30 * 24 * 60 * 60 * 1000; // ~3 months

  readonly theme = signal<Theme>('dark'); // Default initial value

  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize theme on browser
      this.theme.set(this.getInitialTheme());

      effect(() => {
        const currentTheme = this.theme();
        this.applyTheme(currentTheme);
        this.saveTheme(currentTheme);
      });

      // Listen for system theme changes if no saved theme or saved theme expired
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(this.THEME_KEY)) {
          this.theme.set(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  toggleTheme(): void {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }

  private getInitialTheme(): Theme {
    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved) {
      try {
        const { theme, expiry } = JSON.parse(saved) as PersistedTheme;
        if (Date.now() < expiry) {
          return theme;
        }
      } catch {
        // Ignore parsing errors
      }
    }

    // Try system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }

    // Fallback to config
    return (APP_CONFIG.defaultTheme as Theme) || 'dark';
  }

  private saveTheme(theme: Theme): void {
    const persisted: PersistedTheme = {
      theme,
      expiry: Date.now() + this.EXPIRY_MS,
    };
    localStorage.setItem(this.THEME_KEY, JSON.stringify(persisted));
  }

  private applyTheme(theme: Theme): void {
    const body = document.body;
    body.classList.remove('theme-light', 'theme-dark');
    body.classList.add(`theme-${theme}`);
  }
}
