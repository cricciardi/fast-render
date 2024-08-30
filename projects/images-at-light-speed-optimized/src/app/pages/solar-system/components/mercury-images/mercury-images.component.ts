import {Component, OnInit} from '@angular/core';
import {INasaApiResponse} from '../../models/SolarSystem';
import {Planets} from '../../enum/planets';
import {MarsGalleryService} from '../../../mars-gallery/services/mars-gallery.service';
import {catchError, Observable, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {ListImagesComponent} from '../list-images/list-images.component';

@Component({
  selector: 'app-mercury-images',
  standalone: true,
  template: '<app-list-images [nasaApi$]="nasaApi$"></app-list-images>',
  imports: [
    ListImagesComponent
  ]
})
export class MercuryImagesComponent implements OnInit {
  public nasaApi$: Observable<INasaApiResponse> | undefined;

  constructor(private marsGalleryService: MarsGalleryService) {
  }

  ngOnInit() {
    this.nasaApi$ = this.marsGalleryService.getNASAImagesBySearch(Planets.MERCURY).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
