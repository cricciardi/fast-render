import {Component, OnInit} from '@angular/core';
import {INasaApiResponse} from '../../models/SolarSystem';
import {Planets} from '../../enum/planets';
import {MarsGalleryService} from '../../../mars-gallery/services/mars-gallery.service';
import {catchError, Observable, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-sun-images',
  templateUrl: './sun-images.component.html',
  styleUrl: './sun-images.component.scss'
})
export class SunImagesComponent implements OnInit {
  public nasaApi$: Observable<INasaApiResponse> | undefined;

  constructor(private marsGalleryService: MarsGalleryService) {
  }

  ngOnInit() {
    this.nasaApi$ = this.marsGalleryService.getNASAImagesBySearch(Planets.SUN).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
