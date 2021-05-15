import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Audit } from '../models/audit';
import { Book } from '../models/book';
import { AuditsService } from '../services/audits.service';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  objectBeforeEdit: any;
  valueAfterEdit: any;
  oldValue: string = '';
  changedField: string = '';

  constructor(private booksService: BooksService, private auditsService: AuditsService, private router: Router) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    })
  }

  saveCellValue(e: any): void {
    this.changedField = e.column.dataField;
    this.oldValue = e.data[this.changedField];
  }

  saveNewCellValue(e: any): void {
    this.valueAfterEdit = e.newData;
    this.objectBeforeEdit = e.oldData;
  }

  save(e: any): void {

    let newAudit = {
      changedColumn: this.changedField,
      previousValue: this.oldValue,
      newValue: this.valueAfterEdit[this.changedField],
      timestamp: new Date(),
      bookId: this.objectBeforeEdit['id']
    };

    let book = this.objectBeforeEdit;
    book[this.changedField] = this.valueAfterEdit[this.changedField];

    this.booksService.createUpdateBook(book).subscribe();
    this.auditsService.createAudit(newAudit).subscribe();
  }
}
