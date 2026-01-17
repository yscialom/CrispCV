import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { VERSION } from '../core/version';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public readonly version = VERSION;
}
