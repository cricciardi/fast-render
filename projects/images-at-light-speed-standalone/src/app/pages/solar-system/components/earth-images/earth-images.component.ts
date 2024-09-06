import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {INasaApiResponse} from '../../models/SolarSystem';
import {MarsGalleryService} from '../../../mars-gallery/services/mars-gallery.service';
import {Planets} from '../../enum/planets';
import {HttpErrorResponse} from '@angular/common/http';
import {ListImagesComponent} from '../list-images/list-images.component';

@Component({
  selector: 'app-earth-images',
  standalone: true,
  imports: [ListImagesComponent],
  template: `
    <h3 class="text-danger text-center mt-5">{{Planets.EARTH}}</h3>
    <p class="card-text text-center text-white">
      Earth is the third planet from the Sun and the only astronomical
      object known to harbor life. This is enabled by Earth being an ocean world,
      the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean,
      covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere.
      Most of Earth's land is somewhat humid and covered by vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's groundwater, lakes,
      rivers and atmospheric water combined. Earth's crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes.
      Earth has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation.
    </p>
    <app-list-images [nasaApi$]="nasaApi$"></app-list-images>
  `
})
export class EarthImagesComponent implements OnInit {
  public nasaApi$: Observable<INasaApiResponse> | undefined;
  public readonly Planets = Planets;

  constructor(private marsGalleryService: MarsGalleryService) {
  }

  ngOnInit() {
    this.nasaApi$ = this.marsGalleryService.getNASAImagesBySearch(Planets.EARTH).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
