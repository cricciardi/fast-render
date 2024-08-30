import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mars-gallery',
    loadComponent: () => import('./pages/mars-gallery/components/mars-gallery.component').then((m) => m.MarsGalleryComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/components/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'solar-system',
    loadComponent: () => import('./pages/solar-system/solar-system.component').then((m) => m.SolarSystemComponent)
  }
];
