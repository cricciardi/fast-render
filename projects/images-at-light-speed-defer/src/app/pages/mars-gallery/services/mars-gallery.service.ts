import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MarsGallery} from '../models/MarsItemGallery';
import {INasaApiResponse} from "../../solar-system/models/SolarSystem";

@Injectable({
  providedIn: 'root',
})
export class MarsGalleryService {

  private readonly BASE_PATH = environment.apiUrl;
  private readonly IMAGES_PATH = environment.apiImageUrl;
  private readonly API_KEY = environment.apiKey;

  constructor(private http: HttpClient) {
  }

  public getNASAImagesBySearch(planet: string): Observable<INasaApiResponse> {
    return this.http.get<INasaApiResponse>(`${this.IMAGES_PATH}/search?q=${planet}`);
  }

  public getMarsGalleryCHEMCAM(): Observable<MarsGallery> {
    return this.http.get<MarsGallery>(`${this.BASE_PATH}/mars-photos/api/v1/rovers/curiosity/photos?sol=0&api_key=${this.API_KEY}&camera=chemcam`);
  }

  public getMarsGalleryFHAZ(): Observable<MarsGallery> {
    return this.http.get<MarsGallery>(`${this.BASE_PATH}/mars-photos/api/v1/rovers/curiosity/photos?sol=0&api_key=${this.API_KEY}&camera=fhaz`);
  }

  public getMarsGalleryMARDI(): Observable<MarsGallery> {
    return this.http.get<MarsGallery>(`${this.BASE_PATH}/mars-photos/api/v1/rovers/curiosity/photos?sol=0&api_key=${this.API_KEY}&camera=mardi`);
  }

  public getMarsGalleryRHAZ(): Observable<MarsGallery> {
    return this.http.get<MarsGallery>(`${this.BASE_PATH}/mars-photos/api/v1/rovers/curiosity/photos?sol=0&api_key=${this.API_KEY}&camera=rhaz`);
  }


}
