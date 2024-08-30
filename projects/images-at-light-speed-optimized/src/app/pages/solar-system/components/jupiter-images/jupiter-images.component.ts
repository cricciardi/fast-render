import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {INasaApiResponse} from '../../models/SolarSystem';
import {MarsGalleryService} from '../../../mars-gallery/services/mars-gallery.service';
import {Planets} from '../../enum/planets';
import {HttpErrorResponse} from '@angular/common/http';
import {ListImagesComponent} from '../list-images/list-images.component';

@Component({
  selector: 'app-jupiter-images',
  standalone: true,
  template: '<app-list-images [nasaApi$]="nasaApi$"></app-list-images>',
  imports: [
    ListImagesComponent
  ]
})
export class JupiterImagesComponent implements OnInit {
  public nasaApi$: Observable<INasaApiResponse> | undefined;

  constructor(private marsGalleryService: MarsGalleryService) {
  }

  ngOnInit() {
    this.nasaApi$ = this.marsGalleryService.getNASAImagesBySearch(Planets.JUPITER).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
