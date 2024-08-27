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

                <h6 class="text-white text-center mb-5" #chemcam>CHEMCAM CAMERA</h6>
                <app-mars-gallery-chemcam-list class="row"></app-mars-gallery-chemcam-list>

                <h6 class="text-white text-center mb-5" #fhaz>FHAZ CAMERA</h6>
                <app-mars-gallery-fhaz-list class="row"></app-mars-gallery-fhaz-list>

                <h6 class="text-white text-center mb-5" #rhaz>RHAZ CAMERA</h6>
                <app-mars-gallery-rhaz-list class="row"></app-mars-gallery-rhaz-list>

                <h6 class="text-white text-center mb-5" #mardi>MARDI CAMERA</h6>
                <app-mars-gallery-mardi-list class="row"></app-mars-gallery-mardi-list>


<!--        <h6 class="text-white text-center mb-5" #chemcam>CHEMCAM CAMERA</h6>-->
<!--        @defer (on viewport(chemcam)) {-->
<!--          <app-mars-gallery-chemcam-list class="row"></app-mars-gallery-chemcam-list>-->
<!--        }-->
<!--        <h6 class="text-white text-center mb-5" #fhaz>FHAZ CAMERA</h6>-->
<!--        @defer (on viewport(fhaz)) {-->
<!--          <app-mars-gallery-fhaz-list class="row"></app-mars-gallery-fhaz-list>-->
<!--        }-->
<!--        <h6 class="text-white text-center mb-5" #rhaz>RHAZ CAMERA</h6>-->
<!--        @defer (on viewport(rhaz)) {-->
<!--          <app-mars-gallery-rhaz-list class="row"></app-mars-gallery-rhaz-list>-->
<!--        }-->
<!--        <h6 class="text-white text-center mb-5" #mardi>MARDI CAMERA</h6>-->
<!--        @defer (on viewport(mardi)) {-->
<!--          <app-mars-gallery-mardi-list class="row"></app-mars-gallery-mardi-list>-->
<!--        } @placeholder {-->
<!--          <div class="col-12 text-center">-->
<!--            <p class="text-white"> Caricamento ...</p>-->
<!--          </div>-->
<!--        }-->

      </div>
    </div>
  `,
  styles: ``
})
export class MarsGalleryComponent {
}
