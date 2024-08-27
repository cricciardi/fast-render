import {Component} from '@angular/core';
import {catchError, tap, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {MarsGalleryService} from "../mars-gallery/services/mars-gallery.service";
import {INasaApiResponse} from "./models/solar-system.model";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-solar-system',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <div class="container justify-content-center align-items-center d-flex mt-5">
      <div class="row d-flex justify-content-between w-100">
        <div class="col-1">
        </div>
        <div class="col-1 cursor-pointer">
          <p class="text-white" (click)="getInformation('Sun')">
            Sun
          </p>
        </div>
        <div class="col-1 cursor-pointer">
          <p class="text-white" (click)="getInformation('Mercury')">
            Mercury
          </p>
        </div>
        <div class="col-1 cursor-pointer">
          <p class="text-white" (click)="getInformation('Venus')">
            Venus
          </p>
        </div>
        <div class="col-1 cursor-pointer">
          <p class="text-white" (click)="getInformation('Earth')">
            Earth
          </p>
        </div>
        <div class="col-1 cursor-pointer">
          <p class="text-white" (click)="getInformation('Mars')">
            Mars
          </p>
        </div>
        <div class="col-1 cursor-pointer">
          <p class="text-white" (click)="getInformation('Jupiter')">
            Jupiter
          </p>
        </div>
        <div class="col-1 cursor-pointer">
          <p class="text-white" (click)="getInformation('Saturn')">
            Saturn
          </p>
        </div>
        <div class="col-1 cursor-pointer">
          <p class="text-white" (click)="getInformation('Uranus')">
            Uranus
          </p>
        </div>
        <div class="col-1 cursor-pointer">
          <p class="text-white" (click)="getInformation('Neptune')">
            Neptune
          </p>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-7 col-sm-12">
          <ol>
            <li class="sun" [ngClass]="planetSelected == 'Sun' ? 'planet-selected'  : '' "></li>
            <li class="mercury" [ngClass]="planetSelected == 'Mercury' ? 'planet-selected' : '' "></li>
            <li class="venus" [ngClass]="planetSelected == 'Venus' ? 'planet-selected'  : ''"></li>
            <li class="earth" [ngClass]="planetSelected == 'Earth' ? 'planet-selected'  : ''"></li>
            <li class="mars" [ngClass]="planetSelected == 'Mars' ? 'planet-selected'  : ''"></li>
            <li class="jupiter" [ngClass]="planetSelected == 'Jupiter' ? 'planet-selected' : '' "></li>
            <li class="saturn" [ngClass]="planetSelected == 'Saturn' ? 'planet-selected' : '' "></li>
            <li class="uranus" [ngClass]="planetSelected == 'Uranus' ? 'planet-selected'  : ''"></li>
            <li class="neptune" [ngClass]="planetSelected == 'Neptune' ? 'planet-selected' : '' "></li>
          </ol>
        </div>
        <div class="col-md-12 col-sm-12">
          @for (data of nasaApiResponse?.collection?.items; track data) {
            @for (img of data?.links; track img) {
              <img [src]="img?.href" width="400" height="auto" alt="" class="m-2">
            }
          }
        </div>
      </div>

    </div>
  `,
  styles: `

    .planet-selected::after {
      box-shadow: 0px 0px 20px 15px #888888 !important;
    }

    .text-planet {
      display: inline-block;
      text-align: center;
      font-size: 20px;
      padding: 15px 15px;
    }

    body {
      background: #000F;
      color: #FFFA;
      margin: 0;
      width: 100vw;
    }

    ol {
      all: unset;
      aspect-ratio: 1 / 1;
      container-type: inline-size;
      display: grid;
      width: 100%;
    }

    li {
      aspect-ratio: 1 / 1;
      border: 1px solid #ffffff36;
      border-radius: 50%;
      display: grid;
      grid-area: 1 / 1;
      place-self: center;
      width: var(--d, 2cqi);

      &::after {
        animation: rotate var(--t, 3s) linear infinite;
        aspect-ratio: 1 / 1;
        background: var(--b, hsl(0, 0%, 50%));
        border-radius: 50%;
        content: '';
        display: block;
        offset-path: content-box;
        width: var(--w, 2cqi);
      }
    }

    @keyframes rotate {
      to {
        offset-distance: 100%;
      }
    }

    .sun {
      --b: radial-gradient(circle, #f9d71c 0%, #f9a825 50%, #f9a825 100%);
      --d: 10cqi;
      --w: 8cqi;
      border: 0;

      &::after {
        animation: none;
        offset-path: none;
        place-self: center;
      }
    }

    .mercury {
      --b: radial-gradient(circle, #c2c2c2 0%, #8a8a8a 100%);
      --d: 15cqi;
      --t: 2105.26ms;
      --w: 2.0526cqi;
    }

    .venus {
      --b: radial-gradient(circle, #f4d03f 0%, #c39c43 100%);
      --d: 25cqi;
      --t: 4210.53ms;
      --w: 2.6053cqi;
    }

    .earth {
      --b: radial-gradient(circle, #3a82f7 0%, #2f9e44 80%, #1a5e20 100%);
      --d: 35cqi;
      --t: 6315.79ms;
      --w: 3.1579cqi;
    }

    .mars {
      --b: radial-gradient(circle, #e57373 0%, #af4448 100%);
      --d: 45cqi;
      --t: 8421.05ms;
      --w: 3.7105cqi;
    }

    .jupiter {
      --b: radial-gradient(circle, #d4a373 0%, #b36d32 50%, #f4e7d3 100%);
      --d: 60cqi;
      --t: 12631.58ms;
      --w: 4.8158cqi;
    }

    .saturn {
      --b: radial-gradient(circle, #e6dba0 0%, #c2a13e 100%);
      --d: 75cqi;
      --t: 14736.84ms;
      --w: 5.3684cqi;
    }

    .uranus {
      --b: radial-gradient(circle, #7de3f4 0%, #3ba0b5 100%);
      --d: 84.5cqi;
      --t: 10526.32ms;
      --w: 4.2632cqi;
    }

    .neptune {
      --b: radial-gradient(circle, #4c6ef5 0%, #1b3b8c 100%);
      --d: 94cqi;
      --t: 20000ms;
      --w: 6cqi;
    }`
})
export class SolarSystemComponent {
  public nasaApiResponse: INasaApiResponse | any;
  public planetSelected: string | undefined;

  constructor(private marsGalleryService: MarsGalleryService) {
  }

  public getInformation(planet: string): void {
    this.planetSelected = planet;
    console.log(this.planetSelected);
    this.marsGalleryService.getNASAImagesBySearch(planet).pipe(
      tap(data => this.nasaApiResponse = data),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    ).subscribe();
  }
}
