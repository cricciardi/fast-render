import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private readonly BASE_PATH = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getAllBooks(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.BASE_PATH}?q=harry`);
  }

}
