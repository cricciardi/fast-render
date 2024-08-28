import { Routes } from '@angular/router';
import {MarsGalleryComponent} from './pages/mars-gallery/components/mars-gallery.component';
import {HomeComponent} from './pages/home/components/home.component';
import {SolarSystemComponent} from './pages/solar-system/solar-system.component';
import {SolarSystemModule} from './pages/solar-system/solar-system.module';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mars-gallery',
    component: MarsGalleryComponent,
  },
  // {
  //   path: 'mars-gallery',
  //   loadComponent: () => import('./pages/mars-gallery/components/mars-gallery.component').then((m) => m.MarsGalleryComponent)
  //   component: MarsGalleryComponent,
  // },
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path: 'home',
  //   loadComponent: () => import('./pages/home/components/home.component').then((m) => m.HomeComponent)
  // },
  {
    path: 'solar-system',
      loadChildren: () => import('./pages/solar-system/solar-system.module').then((m) => m.SolarSystemModule),
  },
  // {
  //   path: 'solar-system',
  //   loadComponent: () => import('./pages/solar-system/solar-system.component').then((m) => m.SolarSystemComponent)
  // }
];
