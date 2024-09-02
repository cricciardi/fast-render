import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomeService} from '../services/home.service';
import {catchError, Subscription, tap, throwError} from 'rxjs';
import {IApod} from '../models/IApod';
import {HttpErrorResponse} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <h1 class="justify-content-center d-flex text-danger">Astronomy Picture of the Day</h1>
      <div class="card w-100 align-content-center align-items-center border-0 pt-5 bg-transparent">
        @if (apod?.media_type == 'image') {
          <img [src]="apod?.url" width="700" height="auto" alt="">
        }
        @if (apod?.media_type == 'video') {
          <iframe [src]="sanitizedUrl" allowfullscreen width="900" height="600"></iframe>
        }
        <div class="card-body text-white">
          <h5 class="card-title text-center">{{ apod?.title ?? '' }} </h5>
          <p class="card-text text-center">{{ apod?.explanation ?? '' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: `
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  public apod: IApod | undefined;
  public subscriptions: Array<Subscription> = [];
  public sanitizedUrl: any;

  constructor(private homeService: HomeService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    const sb = this.homeService.getAPODImages().pipe(
      tap(response => {
        this.apod = response;
        if (this.apod?.media_type == 'video') {
          this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.apod?.url);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    ).subscribe();
    this.subscriptions.push(sb);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
