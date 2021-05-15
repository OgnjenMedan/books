import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Audit } from './models/audit';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  createDb() {
    let date = new Date();
    const audits: Audit[] = [];
    const books = [
      {
        id: 1,
        title: 'Hobbit',
        publishDate: date,
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        author: 'J.R.R. Tolkien'
      },
      {
        id: 2,
        title: 'The Alchemist',
        publishDate: date,
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        author: 'Paulo Coelho'
      },
      {
        id: 3,
        title: 'Don Quixote',
        publishDate: date,
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        author: 'Miguel de Cervantes'
      },
      {
        id: 9,
        title: 'The Lord of the Rings',
        publishDate: date,
        shortDescription: "Rings, elves, bows n stuff.",
        author: 'J.R.R. Tolkien'
      },
    ];
    return { books, audits };
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
  }
}
