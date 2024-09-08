import {Component} from '@angular/core';
import {Planets} from './enum/planets';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.scss']
})
export class SolarSystemComponent {
  protected readonly Planets = Planets;
  public listOfPlanets = Object.values(Planets);
  public planetSelected: string | undefined;

  public loadComponent(planet: string) {
    this.planetSelected = planet;
  }
}
