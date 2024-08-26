import {Component, OnInit} from '@angular/core';
import {BooksService} from './books.service';
import {tap} from 'rxjs';

@Component({
  selector: 'lib-technique-without-defer',
  standalone: true,
  imports: [],
  template: `
    <p>
      gdg-cb works!
    </p>
  `,
  styles: ``
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getMarsImages().pipe(
      tap(marsImagesResponse => console.log(marsImagesResponse.body))
    ).subscribe();
    this.booksService.getNASAImagesBySearch().pipe(
      tap(nasaImagesResponse => console.log(nasaImagesResponse.body))
    ).subscribe();
  }
}
