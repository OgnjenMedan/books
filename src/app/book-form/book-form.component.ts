import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: '',
      shortDescription: '',
      publishDate: new Date(),
      author: ''
    });
  }

  onSubmit(): void {
    let data = this.bookForm.value;
    let newBook = {
      title: data.title,
      shortDescription: data.shortDescription,
      author: data.author,
      publishDate: new Date(data.publishDate),
    };

    this.bookService.createUpdateBook(newBook).subscribe(data => {
      this.router.navigate(['books']);
    });

    this.bookForm.reset();
  }
}
