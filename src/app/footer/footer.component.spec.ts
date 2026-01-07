import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the footer text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // The translation pipe returns the key by default if not configured otherwise in tests,
    // or we should update expectation if we want to match specific text.
    // Given TranslateModule.forRoot(), it might return keys or empty.
    // Let's match the structure or check if keys are present.
    const pContent = compiled.querySelector('footer p')?.textContent;
    expect(pContent).toContain('FOOTER.STATIC_RESUME');
    expect(pContent).toContain('Yankel Scialom');
  });

  it('should have a link to the github repo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('footer a');
    expect(link?.getAttribute('href')).toBe('https://github.com/yscialom/crispcv');
    expect(link?.textContent).toContain('FOOTER.FORK_US');
  });
});
