import {Component, OnInit} from '@angular/core';
import {MarsGalleryService} from '../services/mars-gallery.service';
import {catchError, tap, throwError} from 'rxjs';
import {MarsGallery} from '../models/MarsItemGallery';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'lib-technique-without-defer',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div class="row">
        @for (marsItemGallery of marsGallery?.photos; track marsItemGallery) {
          <div class="col-4">
            <div class="card w-100 align-content-center align-items-center border-0 pt-5">
              <img [src]="marsItemGallery?.img_src" width="400" height="auto" alt="">
              <div class="card-body">
                <h5 class="card-title text-center">{{ marsItemGallery?.earth_date ?? '' }} </h5>
                <p class="card-text text-center">Rover: {{ marsItemGallery?.rover?.name ?? '' }}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``
})
export class MarsGalleryComponent implements OnInit {
  public marsGallery: MarsGallery | undefined;

  constructor(private marsGalleryService: MarsGalleryService) {
  }

  ngOnInit(): void {
    this.marsGalleryService.getMarsGallery().pipe(
      tap(marsGallery => this.marsGallery = marsGallery),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    ).subscribe();
  }
}
