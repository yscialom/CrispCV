// src/app/core/services/app-config.service.ts
import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../../../config/app.config';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  public readonly appConfig = APP_CONFIG;
}
