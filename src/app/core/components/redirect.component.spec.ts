import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedirectComponent } from './redirect.component';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { PermalinkService } from '../services/permalink.service';

describe('RedirectComponent', () => {
  let fixture: ComponentFixture<RedirectComponent>;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  let mockRouter: any;
  let mockPermalinkService: any;
  let mockActivatedRoute: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  beforeEach(async () => {
    mockRouter = {
      navigate: vi.fn(),
    };
    mockPermalinkService = {
      resolveId: vi.fn(),
    };
    mockActivatedRoute = {
      snapshot: {
        paramMap: convertToParamMap({ id: '42' }),
      },
    };

    await TestBed.configureTestingModule({
      imports: [RedirectComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: PermalinkService, useValue: mockPermalinkService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RedirectComponent);
  });

  it('should redirect to correct route and fragment for valid ID', () => {
    mockPermalinkService.resolveId.mockReturnValue({ route: '/experience', fragment: 'google-42' });

    fixture.detectChanges(); // triggers ngOnInit

    expect(mockPermalinkService.resolveId).toHaveBeenCalledWith(42);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/experience'], { fragment: 'google-42' });
  });

  it('should redirect to root for non-existent ID', () => {
    mockPermalinkService.resolveId.mockReturnValue(null);

    fixture.detectChanges();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should redirect to root for invalid ID format', () => {
    mockActivatedRoute.snapshot.paramMap = convertToParamMap({ id: 'abc' });

    fixture.detectChanges();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });
});
