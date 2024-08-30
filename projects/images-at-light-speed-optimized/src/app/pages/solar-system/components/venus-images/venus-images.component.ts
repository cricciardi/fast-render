import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {INasaApiResponse} from '../../models/SolarSystem';
import {MarsGalleryService} from '../../../mars-gallery/services/mars-gallery.service';
import {Planets} from '../../enum/planets';
import {HttpErrorResponse} from '@angular/common/http';
import {ListImagesComponent} from '../list-images/list-images.component';

@Component({
  selector: 'app-venus-images',
  standalone: true,
  template: `
    <h3 class="text-danger text-center mt-5">{{Planets.VENUS}}</h3>
    <p class="card-text text-center text-white">
      Venus is the second planet from the Sun. It is a terrestrial planet and is the closest in mass and size to its orbital neighbour Earth.
      Venus is notable for having the densest atmosphere of the terrestrial planets, composed mostly of carbon dioxide with a thick,
      global sulfuric acid cloud cover. At the surface it has a mean temperature of 737 K (464 °C; 867 °F) and a pressure of 92 times that of Earth's at sea level.
      These extreme conditions compress carbon dioxide into a supercritical state close to Venus's surface.
    </p>
    <app-list-images [nasaApi$]="nasaApi$"></app-list-images>
  `,
  imports: [
    ListImagesComponent
  ]
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
