import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
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
    // &mdash; is rendered as \u2014 in textContent
    expect(compiled.querySelector('footer p')?.textContent).toContain(
      'static résumé \u2014 Yankel Scialom \u2014'
    );
  });

  it('should have a link to the github repository', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a');
    expect(link).toBeTruthy();
    expect(link?.getAttribute('href')).toBe('https://github.com/yscialom/vibed-resume');
    expect(link?.textContent).toContain('fork us on github');
  });
});
