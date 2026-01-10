import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageSwitchComponent } from './language-switch.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ResumeDataService } from '../../../core/services/resume-data.service';
import { signal } from '@angular/core';

describe('LanguageSwitchComponent', () => {
  let component: LanguageSwitchComponent;
  let fixture: ComponentFixture<LanguageSwitchComponent>;
  let translateService: TranslateService;

  // Mock ResumeDataService
  const resumeDataServiceMock = {
    getSupportedLanguages: () => ['en_US', 'fr_FR'],
    currentLocale: signal('en_US'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSwitchComponent, TranslateModule.forRoot()],
      providers: [
        { provide: ResumeDataService, useValue: resumeDataServiceMock },
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
    fixture = TestBed.createComponent(LanguageSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dropdown state', () => {
    const event = new MouseEvent('click');
    vi.spyOn(event, 'stopPropagation');

    expect(component.isOpen()).toBe(false);

    component.toggle(event);
    expect(component.isOpen()).toBe(true);
    expect(event.stopPropagation).toHaveBeenCalled();

    component.toggle(event);
    expect(component.isOpen()).toBe(false);
  });

  it('should switch language', () => {
    const event = new MouseEvent('click');
    vi.spyOn(event, 'stopPropagation');
    const useSpy = vi.spyOn(translateService, 'use');

    // Open first
    component.isOpen.set(true);

    component.switchLanguage(event, 'fr_FR');

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(useSpy).toHaveBeenCalledWith('fr_FR');
    expect(component.isOpen()).toBe(false);
  });

  it('should return correct flag and name', () => {
    expect(component.getLangFlag('fr_FR')).toBe('🇫🇷');
    expect(component.getLangName('fr_FR')).toBe('Français');
    expect(component.getLangFlag('unknown')).toBe('🏳️');
    expect(component.getLangName('unknown')).toBe('unknown');
  });

  it('should close dropdown on document click outside', () => {
    component.isOpen.set(true);
    
    // Simulate click on document body
    document.body.click();
    
    expect(component.isOpen()).toBe(false);
  });
  
  it('should NOT close dropdown on click inside', () => {
      component.isOpen.set(true);
      
      // Simulate click on the component element
      fixture.nativeElement.click();
      
      // The host listener is on 'document:click', but the component has stopPropagation in toggle()
      // checking logic: The component uses elementRef.contains(event.target) in the HostListener.
      // So if we click inside, the HostListener callback should fire, check contains(), and NOT set isOpen to false.
      
      // However, physically triggering a click in JSDOM that bubbles up to document is tricky to rely on elementRef.contains 
      // without a full event dispatch. 
      // Let's call the handler directly to test the logic.
      
      const mockEvent = { target: fixture.nativeElement } as unknown as MouseEvent;
      component.onDocumentClick(mockEvent);
      
      // Since target is inside nativeElement, it should remain open
      expect(component.isOpen()).toBe(true);
  });
});
