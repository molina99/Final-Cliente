import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book;
  id: any;
  editing: boolean = false;
  books: Book[];

  constructor(
    private bookService:BooksService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
        this.id = this.activatedRoute.snapshot.params['id'];
        if(this.id){
          this.editing = true;
          this.bookService.consult().subscribe((data: Book[])=>{
            this.books = data;
            this.book = this.books.find((m) => {
              return m.id == this.id
            });
            console.log(this.book);
          },(error)=>{
            console.log(error);
          });
        }else{
          this.editing = false;
        }
      }

  ngOnInit() {
    this.book = new Book();
  }

  register(book){
    if (this.editing){
      this.bookService.update(this.book).subscribe(
        response=>{
          alert ('Libro Actualizado');
          this.router.navigate(['books']);
        },
        error=>{
          console.log('error');
          console.log(error.valueOf().error.errorInfo[0]);
          if(error.valueOf().error.errorInfo[0]=='23505'){
            alert ('Libro duplicado');
          }
        });
    }else{
      this.bookService.insert(this.book).subscribe(
        response=>{
          alert ('Libro Almacenado');
          this.router.navigate(['books']);
        },
        error=>{
          console.log('error');
          console.log(error.valueOf().error.errorInfo[0]);
          if(error.valueOf().error.errorInfo[0]=='23505'){
            alert ('Libro duplicado');
          }
        });
    }
  }  

}
