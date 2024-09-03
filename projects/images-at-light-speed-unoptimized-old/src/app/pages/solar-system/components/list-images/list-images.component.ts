import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {INasaApiResponse} from '../../models/SolarSystem';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrl: './list-images.component.scss'
})
export class ListImagesComponent {
  @Input() nasaApi$: Observable<INasaApiResponse> | undefined;

}
