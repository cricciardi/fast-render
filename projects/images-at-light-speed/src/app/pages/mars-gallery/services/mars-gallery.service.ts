import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MarsGallery} from '../models/MarsItemGallery';

@Injectable({
  providedIn: 'root',
})
export class MarsGalleryService {

  private readonly BASE_PATH = environment.apiUrl;
  private readonly IMAGES_PATH = environment.apiImageUrl;
  private readonly API_KEY = environment.apiKey;

  constructor(private http: HttpClient) {
  }

  public getNASAImagesBySearch(planet: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.IMAGES_PATH}/search?q=apollo%2011&media_type=image&keywords=${planet}`);
  }

  public getMarsGallery(): Observable<MarsGallery> {
    return this.http.get<MarsGallery>(`${this.BASE_PATH}/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${this.API_KEY}`);
  }

}
