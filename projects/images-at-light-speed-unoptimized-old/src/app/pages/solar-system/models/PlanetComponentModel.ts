export class PlanetComponentModel {
  planet: string;
  componentCallback: string;

  constructor(planet: string, componentCallback: string) {
    this.planet = planet;
    this.componentCallback = componentCallback;
  }
}
