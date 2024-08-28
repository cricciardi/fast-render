import {Component} from '@angular/core';
import {PlanetComponents, Planets} from './enum/planets';
import {PlanetComponentModel} from './models/PlanetComponentModel';
import {VenusImagesComponent} from './components/venus-images/venus-images.component';

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
}
