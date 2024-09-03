import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomeService} from './services/home.service';
import {catchError, Subscription, tap, throwError} from 'rxjs';
import {IApod} from './models/IApod';
import {HttpErrorResponse} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  styleUrl: `./home.component.scss`,
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
