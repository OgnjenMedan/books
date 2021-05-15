import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  SERVER_URL: string = "http://localhost:8080/api/";

  constructor(private client: HttpClient) { }

  public getBooks(): Observable<any> {
    return this.client.get(this.SERVER_URL + 'books');
  }

  public getBook(id: number): Observable<Book> {
    return this.client.get<Book>(`${this.SERVER_URL + 'books'}/${id}`);
  }

  public createUpdateBook(book: { id?: number, title: string, shortDescription: string, publishDate: Date, author: string }): Observable<any> {
    if (book.id)
      return this.client.put(`${this.SERVER_URL + 'books'}/${book.id}`, book)
    return this.client.post(`${this.SERVER_URL + 'books'}`, book)
  }

  // public updateBook(book: { id?: number, title: string, shortDescription: string, publishDate: Date, author: string }): Observable<any>{
  //   return this.client.put(`${this.SERVER_URL + 'books'}/${book.id}`, book)
  // }
}
