import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  text: string;
  type: 'success' | 'info' | 'error';
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public readonly toast = signal<ToastMessage | null>(null);
  private counter = 0;

  show(text: string, type: 'success' | 'info' | 'error' = 'info', duration = 3000) {
    const id = ++this.counter;
    this.toast.set({ text, type, id });

    setTimeout(() => {
      // Only clear if it's still the same toast (simple handling)
      if (this.toast()?.id === id) {
        this.toast.set(null);
      }
    }, duration);
  }
}
