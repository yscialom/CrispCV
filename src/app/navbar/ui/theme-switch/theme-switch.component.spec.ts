import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeSwitchComponent } from './theme-switch.component';
import { ThemeService } from '../../../core/services/theme.service';
import { signal } from '@angular/core';
import { vi } from 'vitest';
import { By } from '@angular/platform-browser';

describe('ThemeSwitchComponent', () => {
  let component: ThemeSwitchComponent;
  let fixture: ComponentFixture<ThemeSwitchComponent>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockThemeService: any;

  beforeEach(async () => {
    mockThemeService = {
      theme: signal('dark'),
      toggleTheme: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [ThemeSwitchComponent],
      providers: [
        { provide: ThemeService, useValue: mockThemeService },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reflect theme status in checkbox', () => {
    mockThemeService.theme.set('dark');
    fixture.detectChanges();
    const checkbox = fixture.debugElement.query(By.css('input[type="checkbox"]')).nativeElement;
    expect(checkbox.checked).toBe(true); // Checked for dark

    mockThemeService.theme.set('light');
    fixture.detectChanges();
    expect(checkbox.checked).toBe(false); // Unchecked for light
  });

  it('should call toggleTheme on change', () => {
    const checkbox = fixture.debugElement.query(By.css('input[type="checkbox"]'));
    checkbox.triggerEventHandler('change', {});
    expect(mockThemeService.toggleTheme).toHaveBeenCalled();
  });
});
