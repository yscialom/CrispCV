import { ChangeDetectionStrategy, Component, input, inject, computed } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';
import { DOCUMENT, APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';
import { PermalinkService } from '../../../core/services/permalink.service';

@Component({
  selector: 'app-resume-entry',
  standalone: true,
  templateUrl: './resume-entry.component.html',
  styleUrl: './resume-entry.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeEntryComponent {
  public readonly title = input.required<string>();
  public readonly subtitle = input.required<string>();
  public readonly location = input.required<string>();
  public readonly dateRange = input.required<string>();

  public readonly permalinkFragment = input<string>();
  public readonly permalinkId = input<number>();
  public readonly isFirst = input<boolean>(false);

  private readonly toastService = inject(ToastService);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly permalinkService = inject(PermalinkService);
  private readonly baseHref = inject(APP_BASE_HREF);

  public readonly isHighlighted = computed(() => {
    const active = this.permalinkService.activeFragment();
    const current = this.permalinkFragment();
    return !!active && active === current;
  });

  protected copyLink(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    const id = this.permalinkId();
    const fragment = this.permalinkFragment();
    if (!id) return;

    // Navigate to long URL (current page + fragment)
    if (fragment) {
      this.router.navigate([], { fragment, replaceUrl: true });
    }

    const base = this.baseHref.endsWith('/') ? this.baseHref : this.baseHref + '/';
    const url = `${this.document.location.origin}${base}${id}`;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        this.toastService.show('Lien copié !', 'success');
      })
      .catch(() => {
        this.toastService.show('Erreur lors de la copie.', 'error');
      });
  }
}
