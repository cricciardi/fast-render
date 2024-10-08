import { Routes } from '@angular/router';
import {MarsGalleryComponent} from "./pages/mars-gallery/components/mars-gallery.component";
import {HomeComponent} from "./pages/home/components/home.component";
import {SolarSystemComponent} from "./pages/solar-system/solar-system.component";
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mars-gallery',
    component: MarsGalleryComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'solar-system',
    component: SolarSystemComponent
  }
];
