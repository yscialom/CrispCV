import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PermalinkService } from '../services/permalink.service';

@Component({
  selector: 'app-redirect',
  template: '',
  standalone: true,
})
export class RedirectComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private permalinkService = inject(PermalinkService);

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!isNaN(id) && id > 0) {
      const resolved = this.permalinkService.resolveId(id);
      if (resolved) {
        this.router.navigate([resolved.route], { fragment: resolved.fragment });
        return;
      }
    }

    // Fallback
    this.router.navigate(['/']);
  }
}
