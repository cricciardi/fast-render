import {PlanetComponentModel} from '../models/PlanetComponentModel';

export enum Planets {
  SUN = 'Sun',
  MERCURY = 'Mercury',
  VENUS = 'Venus',
  EARTH = 'Earth',
  MARS = 'Mars',
  JUPITER = 'Jupiter',
  SATURN = 'Saturn',
  URANUS = 'Uranus',
  NEPTUNE = 'Neptune'
}

export const PlanetComponents: Array<PlanetComponentModel> = [
  {planet: Planets.SUN, componentCallback: 'loadSunImagesComponent'},
  {planet: Planets.MERCURY, componentCallback: 'loadMercuryImagesComponent'},
  {planet: Planets.VENUS, componentCallback: 'loadVenusImagesComponent'},
  {planet: Planets.EARTH, componentCallback: 'loadEarthImagesComponent'},
  {planet: Planets.MARS, componentCallback: 'loadMarsImagesComponent'},
  {planet: Planets.JUPITER, componentCallback: 'loadJupiterImagesComponent'},
  {planet: Planets.SATURN, componentCallback: 'loadSaturnImagesComponent'},
  {planet: Planets.URANUS, componentCallback: 'loadUranusImagesComponent'},
  {planet: Planets.NEPTUNE, componentCallback: 'loadNeptuneImagesComponent'},
]
