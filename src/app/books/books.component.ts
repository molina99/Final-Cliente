import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  url = 'http://localhost:8089/books';

  books: Book[];

  constructor(
    private httpClient:HttpClient,
    private bookService: BooksService
    ) {}

  ngOnInit() {
    this.get();
  }

  get (){
    this.httpClient.get(this.url).subscribe(
      (data: Book[])=>{
        this.books = data;
      });
  }

  delete(id){
    if(confirm('Desea eliminarlo?')){
      this.bookService.delete(id).subscribe(response=>{
        console.log(response);
        this.get();
      },(error) =>{
        console.log(error);
      });
    }
  }
}
