import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/components/home/home.component";
import {MarsGalleryComponent} from "./pages/mars-gallery/components/mars-gallery/mars-gallery.component";
import {SolarSystemComponent} from "./pages/solar-system/solar-system.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'mars-gallery',
    component: MarsGalleryComponent,
  },
  {
    path: 'solar-system',
    component: SolarSystemComponent,
  },
];
