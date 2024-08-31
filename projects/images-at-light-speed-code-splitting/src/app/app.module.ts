import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule, NgClass, NgOptimizedImage, NgTemplateOutlet} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./pages/home/components/home/home.component";
import {MarsGalleryComponent} from "./pages/mars-gallery/components/mars-gallery/mars-gallery.component";
import {
  MarsGalleryChemcamListComponent
} from "./pages/mars-gallery/components/cams/mars-gallery-chemcam/mars-gallery-chemcam-list.component";
import {
  MarsGalleryFhazListComponent
} from "./pages/mars-gallery/components/cams/mars-gallery-fhaz/mars-gallery-fhaz-list.component";
import {
  MarsGalleryMardiListComponent
} from "./pages/mars-gallery/components/cams/mars-gallery-mardi/mars-gallery-mardi-list.component";
import {
  MarsGalleryRhazListComponent
} from "./pages/mars-gallery/components/cams/mars-gallery-rhaz/mars-gallery-rhaz-list.component";
import {SolarSystemComponent} from "./pages/solar-system/solar-system.component";
import {SunImagesComponent} from "./pages/solar-system/components/sun-images/sun-images.component";
import {MercuryImagesComponent} from "./pages/solar-system/components/mercury-images/mercury-images.component";
import {VenusImagesComponent} from "./pages/solar-system/components/venus-images/venus-images.component";
import {ListImagesComponent} from "./pages/solar-system/components/list-images/list-images.component";
import {EarthImagesComponent} from "./pages/solar-system/components/earth-images/earth-images.component";
import {JupiterImagesComponent} from "./pages/solar-system/components/jupiter-images/jupiter-images.component";
import {MarsImagesComponent} from "./pages/solar-system/components/mars-images/mars-images.component";
import {SaturnImagesComponent} from "./pages/solar-system/components/saturn-images/saturn-images.component";
import {UranusImagesComponent} from "./pages/solar-system/components/uranus-images/uranus-images.component";
import {NeptuneImagesComponent} from "./pages/solar-system/components/neptune-images/neptune-images.component";

@NgModule({
  declarations: [
    HomeComponent,
    MarsGalleryComponent,
    MarsGalleryChemcamListComponent,
    MarsGalleryFhazListComponent,
    MarsGalleryMardiListComponent,
    MarsGalleryRhazListComponent,
    SolarSystemComponent,
    SunImagesComponent,
    MercuryImagesComponent,
    VenusImagesComponent,
    ListImagesComponent, EarthImagesComponent,
    JupiterImagesComponent,
    MarsImagesComponent,
    SaturnImagesComponent,
    UranusImagesComponent,
    NeptuneImagesComponent
  ],
  imports: [
    NgClass,
    NgOptimizedImage,
    NgTemplateOutlet,
    AsyncPipe,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent,
    }])
  ]
})
export class AppModule {
}
