import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {INasaApiResponse} from '../../models/SolarSystem';
import {AsyncPipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-list-images',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  template: `
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
