import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MarsGalleryService} from '../services/mars-gallery.service';
import {catchError, Observable, throwError} from 'rxjs';
import {MarsGallery} from '../models/MarsItemGallery';
import {HttpErrorResponse} from '@angular/common/http';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-mars-gallery-chemcam-list',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  template: `
    @if (marsGallery$ | async; as _marsGallery) {
      @for (marsItemGallery of _marsGallery?.photos; track marsItemGallery) {
        <div class="col-4">
          <div class="card w-100 align-content-center align-items-center border-0 pt-5 bg-transparent">
            <img [src]="marsItemGallery?.img_src" width="400" height="auto" alt="">
            <div class="card-body text-white">
              <h5 class="card-title text-center">{{ marsItemGallery?.earth_date ?? '' }} </h5>
              <p class="card-text text-center">Rover: {{ marsItemGallery?.rover?.name ?? '' }}</p>
            </div>
          </div>
        </div>
      }
    } @else {
      <div class="col-12 text-center mh-100">
        <p class="text-white"> Caricamento ...</p>
      </div>
    }

  `,
  styles: ``
})
export class MarsGalleryChemcamListComponent implements OnInit {
  public marsGallery$: Observable<MarsGallery> | undefined;

  constructor(private marsGalleryService: MarsGalleryService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.marsGallery$ = this.marsGalleryService.getMarsGalleryCHEMCAM().pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

}
