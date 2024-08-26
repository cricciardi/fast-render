import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'books',
    loadComponent: () => import('./pages/authors/authors.component').then((m) => m.AuthorsComponent),
  },
  {
    path: 'authors',
    loadComponent: () => import('./pages/books/books.component').then((m) => m.BooksComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  }
];
