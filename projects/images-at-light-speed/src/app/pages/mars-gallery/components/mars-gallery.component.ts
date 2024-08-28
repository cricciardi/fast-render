import {Component} from '@angular/core';
import {MarsGalleryChemcamListComponent} from './mars-gallery-chemcam-list.component';
import {NgOptimizedImage, NgTemplateOutlet} from '@angular/common';
import {MarsGalleryFhazListComponent} from './mars-gallery-fhaz-list.component';
import {MarsGalleryMardiListComponent} from './mars-gallery-mardi-list.component';
import {MarsGalleryRhazListComponent} from './mars-gallery-rhaz-list.component';

@Component({
  selector: 'app-mars-gallery',
  standalone: true,
  imports: [
    MarsGalleryChemcamListComponent,
    NgOptimizedImage,
    MarsGalleryFhazListComponent,
    NgTemplateOutlet,
    MarsGalleryMardiListComponent,
    MarsGalleryRhazListComponent
  ],
  template: `
    <div class="container">
      <div class="row justify-content-center mt-5">
        <h1 class="text-white text-center mb-5">Curiosity Rover</h1>
        <img ngSrc="curiosity.png" priority width="1074" height="700" alt="">

                <h3 class="text-danger text-center mt-5" #chemcam>CHEMCAM CAMERA</h3>
                <app-mars-gallery-chemcam-list class="row mb-5 mt-2"></app-mars-gallery-chemcam-list>

                <h3 class="text-danger text-center" #fhaz>FHAZ CAMERA</h3>
                <app-mars-gallery-fhaz-list class="row mb-5 mt-2"></app-mars-gallery-fhaz-list>

                <h3 class="text-danger text-center" #rhaz>RHAZ CAMERA</h3>
                <app-mars-gallery-rhaz-list class="row mb-5 mt-2"></app-mars-gallery-rhaz-list>

                <h3 class="text-danger text-center" #mardi>MARDI CAMERA</h3>
                <app-mars-gallery-mardi-list class="row mb-5 mt-2"></app-mars-gallery-mardi-list>


<!--        <h3 class="text-danger text-center mt-5" #chemcam>CHEMCAM CAMERA</h3>-->
<!--        @defer (on viewport(chemcam)) {-->
<!--          <app-mars-gallery-chemcam-list class="row mb-5 mt-2"></app-mars-gallery-chemcam-list>-->
<!--        }-->
<!--        <h3 class="text-danger text-center" #fhaz>FHAZ CAMERA</h3>-->
<!--        @defer (on viewport(fhaz)) {-->
<!--          <app-mars-gallery-fhaz-list class="row mb-5 mt-2"></app-mars-gallery-fhaz-list>-->
<!--        }-->
<!--        <h3 class="text-danger text-center" #rhaz>RHAZ CAMERA</h3>-->
<!--        @defer (on viewport(rhaz)) {-->
<!--          <app-mars-gallery-rhaz-list class="row mb-5 mt-2"></app-mars-gallery-rhaz-list>-->
<!--        }-->
<!--        <h3 class="text-danger text-center" #mardi>MARDI CAMERA</h3>-->
<!--        @defer (on viewport(mardi)) {-->
<!--          <app-mars-gallery-mardi-list class="row mb-5 mt-2"></app-mars-gallery-mardi-list>-->
<!--        } @loading {-->
<!--          <div class="spinner-border" role="status">-->
<!--            <span class="sr-only">Caricamento...</span>-->
<!--          </div>-->
<!--        }-->

      </div>
    </div>
  `,
  styles: ``
})
export class MarsGalleryComponent {
}
