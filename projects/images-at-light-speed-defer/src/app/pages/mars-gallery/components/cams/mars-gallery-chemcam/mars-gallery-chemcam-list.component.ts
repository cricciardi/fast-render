import {Component, OnInit} from '@angular/core';
import {MarsGalleryService} from '../../../services/mars-gallery.service';
import {catchError, Observable, throwError} from 'rxjs';
import {MarsGallery} from '../../../models/MarsItemGallery';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-mars-gallery-chemcam-list',
  templateUrl: './mars-gallery-chemcam-list.component.html',
  styleUrl: 'mars-gallery-chemcam-list.component.scss'
})
export class MarsGalleryChemcamListComponent implements OnInit {
  public marsGallery$: Observable<MarsGallery> | undefined;

  constructor(private marsGalleryService: MarsGalleryService) {
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
