import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificationCardComponent } from './certification-card.component';
import { Certification } from '../../../core/models/resume.models';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('CertificationCardComponent', () => {
  let component: CertificationCardComponent;
  let fixture: ComponentFixture<CertificationCardComponent>;

  const mockCertification: Certification = {
    name: 'Test Cert',
    organization: 'Test Org',
    date: '2023-01',
    description: 'Test Description',
    verificationUrl: 'https://example.com/cert',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationCardComponent, TranslateModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { fragment: null } },
        },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificationCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('certification', mockCertification);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display certification details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Cert');
    expect(compiled.textContent).toContain('Test Org');
    expect(compiled.textContent).toContain('Test Description');
    const link = compiled.querySelector('.certification-card__link a');
    expect(link).toBeTruthy();
    expect(link?.getAttribute('href')).toBe('https://example.com/cert');
  });
});
