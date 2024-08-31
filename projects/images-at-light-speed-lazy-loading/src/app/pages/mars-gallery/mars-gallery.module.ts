import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule, NgOptimizedImage, NgTemplateOutlet} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MarsGalleryComponent} from "./components/mars-gallery/mars-gallery.component";
import {MarsGalleryChemcamListComponent} from "./components/cams/mars-gallery-chemcam/mars-gallery-chemcam-list.component";
import {MarsGalleryFhazListComponent} from "./components/cams/mars-gallery-fhaz/mars-gallery-fhaz-list.component";
import {MarsGalleryMardiListComponent} from "./components/cams/mars-gallery-mardi/mars-gallery-mardi-list.component";
import {MarsGalleryRhazListComponent} from "./components/cams/mars-gallery-rhaz/mars-gallery-rhaz-list.component";

@NgModule({
  declarations: [
    MarsGalleryComponent,
    MarsGalleryChemcamListComponent,
    MarsGalleryFhazListComponent,
    MarsGalleryMardiListComponent,
    MarsGalleryRhazListComponent
  ],
  imports: [
    NgOptimizedImage,
    NgTemplateOutlet,
    AsyncPipe,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: MarsGalleryComponent,
    }])
  ],
})
export class MarsGalleryModule {
}
