import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { vi } from 'vitest';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();

    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to dark theme if no preference or config', () => {
    // Assuming APP_CONFIG default is 'dark' and matchMedia returns false
    expect(service.theme()).toBe('dark');
  });

  it('should toggle theme from dark to light', () => {
    service.theme.set('dark');
    service.toggleTheme();
    expect(service.theme()).toBe('light');
  });

  it('should toggle theme from light to dark', () => {
    service.theme.set('light');
    service.toggleTheme();
    expect(service.theme()).toBe('dark');
  });

  it('should save theme to localStorage on change', () => {
    service.theme.set('light');
    // Effect needs time to run or flush. Since we can't easily flush effects in this setup without more boilerplate,
    // we can verify the private method logic if we exposed it, or trust the effect integration.
    // However, with signal effects in unit tests, sometimes we need TestBed.flushEffects() or similar.
    // For simplicity in this environment, let's trigger the logic manually or assume the effect runs.
    // Let's rely on the fact that `applyTheme` and `saveTheme` are called in the effect.

    // Re-instantiate to trigger constructor logic if needed or just set signal
    service.theme.set('dark');
    TestBed.flushEffects();

    const stored = localStorage.getItem('app-theme');
    expect(stored).toBeTruthy();
    if (stored) {
      const parsed = JSON.parse(stored);
      expect(parsed.theme).toBe('dark');
    }
  });
});
