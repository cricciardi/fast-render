import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IApod} from '../models/IApod';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  private readonly BASE_PATH = environment.apiUrl;
  private readonly API_KEY = environment.apiKey;

  constructor(private http: HttpClient) {
  }

  public getAPODImages(): Observable<IApod> {
    return this.http.get<IApod>(`${this.BASE_PATH}/planetary/apod?api_key=${this.API_KEY}`);
  }

}
