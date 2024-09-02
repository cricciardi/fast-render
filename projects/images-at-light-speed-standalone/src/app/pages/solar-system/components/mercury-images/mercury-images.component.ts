import {Component, OnInit} from '@angular/core';
import {INasaApiResponse} from '../../models/SolarSystem';
import {Planets} from '../../enum/planets';
import {MarsGalleryService} from '../../../mars-gallery/services/mars-gallery.service';
import {catchError, Observable, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {ListImagesComponent} from '../list-images/list-images.component';

@Component({
  selector: 'app-mercury-images',
  standalone: true,
  template: `
    <h3 class="text-danger text-center mt-5">{{Planets.MERCURY}}</h3>
    <p class="card-text text-center text-white">
      Mercury is the first planet from the Sun and the smallest in the Solar System. In English, it is named after the ancient Roman god Mercurius (Mercury),
      god of commerce and communication, and the messenger of the gods. Mercury is classified as a terrestrial planet,
      with roughly the same surface gravity as Mars. The surface of Mercury is heavily cratered,
      as a result of countless impact events that have accumulated over billions of years. Its largest crater,
      Caloris Planitia, has a diameter of 1,550 km (960 mi) and one-third the diameter of the planet (4,880 km or 3,030 mi).
      Similarly to the Earth's Moon, Mercury's surface displays an expansive rupes system generated from thrust faults and bright ray systems formed by impact event remnants.
    </p>
    <app-list-images [nasaApi$]="nasaApi$"></app-list-images>`,
  imports: [
    ListImagesComponent
  ]
})
export class MercuryImagesComponent implements OnInit {
  public nasaApi$: Observable<INasaApiResponse> | undefined;
  public readonly Planets = Planets;

  constructor(private marsGalleryService: MarsGalleryService) {
  }

  ngOnInit() {
    this.nasaApi$ = this.marsGalleryService.getNASAImagesBySearch(Planets.MERCURY).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
