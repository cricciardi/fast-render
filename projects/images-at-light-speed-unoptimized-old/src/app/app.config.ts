import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {SolarSystemModule} from './pages/solar-system/solar-system.module';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), SolarSystemModule]
};
