import {Component} from '@angular/core';
import {PlanetComponents, Planets} from './enum/planets';
import {PlanetComponentModel} from './models/PlanetComponentModel';
import {NgClass, NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-solar-system',
  standalone: true,
  imports: [
    NgClass,
    NgComponentOutlet
  ],
  template: `
    <div class="container justify-content-center align-items-center d-flex mt-5 pe-0">
    <div class="row d-flex justify-content-between">
      @for (planet of listOfPlanets; track planet) {
        <div class="cursor-pointer d-flex justify-content-center col-lg-1 col-md-2 col-3">
          <p class="text-white" (click)="loadComponent(planet)">
            {{ planet }}
          </p>
        </div>
      }
    </div>
  </div>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-7 col-sm-12">
        <ol>
          @for (planet of listOfPlanets; track planet) {
            <li class="{{planet?.toLowerCase()}} cursor-pointer" (click)="loadComponent(planet)"
                [ngClass]="{'planet-selected' : planetSelected == planet, 'z-3' : planet == Planets.SUN}">
            </li>
          }
        </ol>
      </div>
      <ng-container *ngComponentOutlet="uploadComponent"></ng-container>
    </div>
  </div>
  `,
  styles: [
    `.planet-selected::after {
    box-shadow: 0 0 20px 15px #888888 !important;
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
  }
  `]
})
export class SolarSystemComponent {
  protected readonly Planets = Planets;
  public listOfPlanets = Object.values(Planets);
  public planetSelected: string | undefined;

  public uploadComponent: any;

  loadComponent(planet: string) {
    this.planetSelected = planet;
    console.log('planet', planet);

    //CODE SPLITTING
    const callbackToSend = PlanetComponents?.find((el: PlanetComponentModel) => el.planet === planet)?.componentCallback;
    if (callbackToSend) {
      this[callbackToSend as keyof typeof SolarSystemComponent.prototype]();
    }
  }

  public loadSunImagesComponent() {
    import('./components/sun-images/sun-images.component').then(({SunImagesComponent}) => {
      this.uploadComponent = SunImagesComponent;
    });
  }

  public loadMercuryImagesComponent() {
    import('./components/mercury-images/mercury-images.component').then(({MercuryImagesComponent}) => {
      this.uploadComponent = MercuryImagesComponent;
    });
  }

  public loadVenusImagesComponent() {
    import('./components/venus-images/venus-images.component').then(({VenusImagesComponent}) => {
      this.uploadComponent = VenusImagesComponent;
    });
  }

  public loadEarthImagesComponent() {
    import('./components/earth-images/earth-images.component').then(({EarthImagesComponent}) => {
      this.uploadComponent = EarthImagesComponent;
    });
  }

  public loadJupiterImagesComponent() {
    import('./components/jupiter-images/jupiter-images.component').then(({JupiterImagesComponent}) => {
      this.uploadComponent = JupiterImagesComponent;
    });
  }

  public loadMarsImagesComponent() {
    import('./components/mars-images/mars-images.component').then(({MarsImagesComponent}) => {
      this.uploadComponent = MarsImagesComponent;
    });
  }

  public loadSaturnImagesComponent() {
    import('./components/saturn-images/saturn-images.component').then(({SaturnImagesComponent}) => {
      this.uploadComponent = SaturnImagesComponent;
    });
  }

  public loadUranusImagesComponent() {
    import('./components/uranus-images/uranus-images.component').then(({UranusImagesComponent}) => {
      this.uploadComponent = UranusImagesComponent;
    });
  }

  public loadNeptuneImagesComponent() {
    import('./components/neptune-images/neptune-images.component').then(({NeptuneImagesComponent}) => {
      this.uploadComponent = NeptuneImagesComponent;
    });
  }
}
