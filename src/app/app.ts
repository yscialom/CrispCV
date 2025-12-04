import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeDataService } from '../../resume-data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly profile = inject(ResumeDataService).profile;
}
