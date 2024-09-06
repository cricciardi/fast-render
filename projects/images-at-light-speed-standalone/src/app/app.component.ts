import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgbModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public stars = Array(10).fill(0);
}
