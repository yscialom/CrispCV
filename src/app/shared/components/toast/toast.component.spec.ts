import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastComponent } from './toast.component';
import { ToastService } from '../../../core/services/toast.service';
import { signal } from '@angular/core';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockToastService: any;

  beforeEach(async () => {
    mockToastService = {
      toast: signal(null),
    };

    await TestBed.configureTestingModule({
      imports: [ToastComponent],
      providers: [{ provide: ToastService, useValue: mockToastService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render toast when signal is set', () => {
    mockToastService.toast.set({ text: 'Hello', type: 'success', id: 1 });
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const toast = compiled.querySelector('.toast');
    expect(toast).toBeTruthy();
    expect(toast?.textContent).toContain('Hello');
    expect(toast?.classList).toContain('toast--success');
  });

  it('should NOT render toast when signal is null', () => {
    mockToastService.toast.set(null);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toast')).toBeFalsy();
  });
});
