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
    this.booksService.getAllBooks().pipe(
      tap(books => console.log(books.body))
    ).subscribe();
  }
}
