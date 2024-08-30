import {Component, OnInit} from '@angular/core';
import {INasaApiResponse} from '../../models/SolarSystem';
import {Planets} from '../../enum/planets';
import {MarsGalleryService} from '../../../mars-gallery/services/mars-gallery.service';
import {catchError, Observable, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {ListImagesComponent} from '../list-images/list-images.component';

@Component({
  selector: 'app-sun-images',
  standalone: true,
  template: `
    <h3 class="text-danger text-center mt-5">{{Planets.SUN}}</h3>
    <p class="card-text text-center text-white">
      The Sun is the star at the center of the Solar System. It is a massive, nearly perfect sphere of hot plasma,
      heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly
      as visible light and infrared radiation with 10% at ultraviolet energies. It is by far the most important
      source of energy for life on Earth. The Sun has been an object of veneration in many cultures.
      It has been a central subject for astronomical research since antiquity.
    </p>
    <app-list-images [nasaApi$]="nasaApi$"></app-list-images>
  `,
  imports: [
    ListImagesComponent
  ]
})
export class SunImagesComponent implements OnInit {
  public nasaApi$: Observable<INasaApiResponse> | undefined;
  public readonly Planets = Planets;

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
