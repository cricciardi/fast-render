import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {INasaApiResponse} from '../../models/SolarSystem';
import {MarsGalleryService} from '../../../mars-gallery/services/mars-gallery.service';
import {Planets} from '../../enum/planets';
import {HttpErrorResponse} from '@angular/common/http';
import {ListImagesComponent} from '../list-images/list-images.component';

@Component({
  selector: 'app-saturn-images',
  standalone: true,
  template: `
    <h3 class="text-danger text-center mt-5">{{Planets.SATURN}}</h3>
    <p class="card-text text-center text-white">
      Saturn is the sixth planet from the Sun and the second largest in the Solar System, after Jupiter.
      It is a gas giant, with an average radius of about nine times that of Earth.
      It has an eighth the average density of Earth, but is over 95 times more massive.
      Even though Saturn is almost as big as Jupiter, Saturn has less than a third the mass of Jupiter.
      Saturn orbits the Sun at a distance of 9.59 AU (1,434 million km), with an orbital period of 29.45 years.
    </p>
    <app-list-images [nasaApi$]="nasaApi$"></app-list-images>`,
  imports: [
    ListImagesComponent
  ]
})
export class SaturnImagesComponent implements OnInit {
  public nasaApi$: Observable<INasaApiResponse> | undefined;
  public readonly Planets = Planets;

  constructor(private marsGalleryService: MarsGalleryService) {
  }

  ngOnInit() {
    this.nasaApi$ = this.marsGalleryService.getNASAImagesBySearch(Planets.SATURN).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
