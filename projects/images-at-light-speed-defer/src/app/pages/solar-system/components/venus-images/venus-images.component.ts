import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {INasaApiResponse} from '../../models/SolarSystem';
import {MarsGalleryService} from '../../../mars-gallery/services/mars-gallery.service';
import {Planets} from '../../enum/planets';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-venus-images',
  templateUrl: './venus-images.component.html',
  styleUrl: './venus-images.component.scss'
})
export class VenusImagesComponent implements OnInit {
  public nasaApi$: Observable<INasaApiResponse> | undefined;
  public Planets = Planets;

  constructor(private marsGalleryService: MarsGalleryService) {
  }

  ngOnInit() {
    this.nasaApi$ = this.marsGalleryService.getNASAImagesBySearch(Planets.VENUS).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
