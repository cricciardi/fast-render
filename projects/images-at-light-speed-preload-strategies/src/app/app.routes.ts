import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mars-gallery',
    loadChildren: () => import('./pages/mars-gallery/mars-gallery.module').then((m) => m.MarsGalleryModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'solar-system',
    loadChildren: () => import('./pages/solar-system/solar-system.module').then((m) => m.SolarSystemModule)
  }
];
