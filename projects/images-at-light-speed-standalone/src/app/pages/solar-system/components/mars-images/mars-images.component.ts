import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {INasaApiResponse} from '../../models/SolarSystem';
import {MarsGalleryService} from '../../../mars-gallery/services/mars-gallery.service';
import {Planets} from '../../enum/planets';
import {HttpErrorResponse} from '@angular/common/http';
import {ListImagesComponent} from '../list-images/list-images.component';

@Component({
  selector: 'app-mars-images',
  standalone: true,
  template: `
    <h3 class="text-danger text-center mt-5">{{Planets.MARS}}</h3>
    <p class="card-text text-center text-white">
      Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust,
      giving it the nickname "the Red Planet".[22][23] Mars is among the brightest objects in Earth's sky,
      and its high-contrast albedo features have made it a common subject for telescope viewing.
      It is classified as a terrestrial planet and is the second smallest of the Solar System's planets with a diameter of 6,779 km (4,212 mi).
      In terms of orbital motion, a Martian solar day (sol) is equal to 24.5 hours, and a Martian solar year is equal to 1.88 Earth years (687 Earth days).
      Mars has two natural satellites that are small and irregular in shape: Phobos and Deimos.
    </p>
    <app-list-images [nasaApi$]="nasaApi$"></app-list-images>`,
  imports: [
    ListImagesComponent
  ]
})
export class MarsImagesComponent implements OnInit {
  public nasaApi$: Observable<INasaApiResponse> | undefined;
  public readonly Planets = Planets;

  constructor(private marsGalleryService: MarsGalleryService) {
  }

  ngOnInit() {
    this.nasaApi$ = this.marsGalleryService.getNASAImagesBySearch(Planets.MARS).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
