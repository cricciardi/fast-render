import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {INasaApiResponse} from '../../models/SolarSystem';
import {MarsGalleryService} from '../../../mars-gallery/services/mars-gallery.service';
import {Planets} from '../../enum/planets';
import {HttpErrorResponse} from '@angular/common/http';
import {ListImagesComponent} from '../list-images/list-images.component';

@Component({
  selector: 'app-neptune-images',
  standalone: true,
  template: `
    <h3 class="text-danger text-center mt-5">{{Planets.NEPTUNE}}</h3>
    <p class="card-text text-center text-white">
      Neptune is the eighth and farthest known planet from the Sun. It is the fourth-largest planet in the Solar System by diameter,
      the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth and slightly more massive,
      but denser and smaller, than fellow ice giant Uranus. Being composed primarily of gases and liquids, it has no well-defined solid surface,
      and orbits the Sun once every 164.8 years at an orbital distance of 30.1 astronomical units (4.5 billion kilometres; 2.8 billion miles).
      It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident.
    </p>
    <app-list-images [nasaApi$]="nasaApi$"></app-list-images>`,
  imports: [
    ListImagesComponent
  ]
})
export class NeptuneImagesComponent implements OnInit {
  public nasaApi$: Observable<INasaApiResponse> | undefined;
  public readonly Planets = Planets;

  constructor(private marsGalleryService: MarsGalleryService) {
  }

  ngOnInit() {
    this.nasaApi$ = this.marsGalleryService.getNASAImagesBySearch(Planets.NEPTUNE).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
