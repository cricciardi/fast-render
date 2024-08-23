import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'books',
    loadComponent: () => import('./pages/authors/authors.component').then((m) => m.AuthorsComponent),
  },
  {
    path: 'authors',
    loadComponent: () => import('./pages/books/books.component').then((m) => m.BooksComponent)
  }
];
