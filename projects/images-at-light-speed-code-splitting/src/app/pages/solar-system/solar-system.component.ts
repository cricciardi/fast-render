import {Component} from '@angular/core';
import {Planets} from './enum/planets';
import {PlanetComponents} from "../../../../../images-at-light-speed-optimized/src/app/pages/solar-system/enum/planets";
import {
  PlanetComponentModel
} from "../../../../../images-at-light-speed-optimized/src/app/pages/solar-system/models/PlanetComponentModel";

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.scss']
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
