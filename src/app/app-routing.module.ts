import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuditsComponent } from './audits/audits.component';

const routes: Routes = [
  {path: 'books', component: BooksComponent },
  {path: 'book-form', component: BookFormComponent },
  {path: 'book-details/:id', component: BookDetailsComponent},
  {path: 'audits', component: AuditsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
