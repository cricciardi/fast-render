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
  template: `
    <h3 class="text-danger text-center mt-5">{{Planets.JUPITER}}</h3>
    <p class="card-text text-center text-white">
      Jupiter is the fifth planet from the Sun and the largest in the Solar System.
      It is a gas giant with a mass more than 2.5 times that of all the other planets in the Solar System combined,
      and slightly less than one-thousandth the mass of the Sun. Its diameter is eleven times that of Earth,
      and a tenth that of the Sun. Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm),
      with an orbital period of 11.86 years. It is the third brightest natural object in the Earth's night sky,
      after the Moon and Venus, and has been observed since prehistoric times. Its name derives from that of Jupiter,
      the chief deity of ancient Roman religion.
    </p>
    <app-list-images [nasaApi$]="nasaApi$"></app-list-images>
  `,
  imports: [
    ListImagesComponent
  ]
})
export class JupiterImagesComponent implements OnInit {
  public nasaApi$: Observable<INasaApiResponse> | undefined;
  public readonly Planets = Planets;

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
