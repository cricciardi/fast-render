import {Component, OnInit} from '@angular/core';
import {AuthorsService} from './authors.service';
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
export class AuthorsComponent implements OnInit {
  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.authorsService.getAllAuthors().pipe(
      tap(authorsService => console.log(authorsService.body))
    ).subscribe();
  }
}
