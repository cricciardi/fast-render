import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {INasaApiResponse} from '../../models/SolarSystem';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-list-images',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  template: `
    <h3 class="text-danger text-center mt-5">Related photos</h3>
    <div class="col-md-12 col-sm-12">' +
      @for (item of (nasaApi$ | async)?.collection?.items; track item) {
        @for (img of item?.links; track img) {
          <img [src]="img?.href" width="400" height="auto" alt="" class="m-2">
        }
      }
    </div>`
})
export class ListImagesComponent {
  @Input() nasaApi$: Observable<INasaApiResponse> | undefined;
}
