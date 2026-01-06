import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set toast signal and clear it after duration', () => {
    service.show('Test Message', 'success', 1000);

    expect(service.toast()).toEqual({
      text: 'Test Message',
      type: 'success',
      id: 1,
    });

    vi.advanceTimersByTime(1000);
    expect(service.toast()).toBeNull();
  });

  it('should only clear the toast if it matches the current ID', () => {
    service.show('First', 'info', 1000);
    vi.advanceTimersByTime(500);
    service.show('Second', 'info', 1000);

    vi.advanceTimersByTime(500); // 1000ms after first call
    // First call timeout triggers, but ID was 1, current is 2.
    expect(service.toast()?.text).toBe('Second');

    vi.advanceTimersByTime(500); // 1000ms after second call
    expect(service.toast()).toBeNull();
  });
});
