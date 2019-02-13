import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Servicios
import { BooksService } from '../app/services/books.service';
import { UserService } from '../app/services/users.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BooksComponent } from './books/books.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'body', component: BodyComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/:id', component: SignupComponent },
  { path: 'users', component: UsersComponent },
  { path: 'create-book', component: CreateBookComponent },
  { path: 'create-book/:id', component: CreateBookComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    BooksComponent,
    SignupComponent,
    UsersComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BooksService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
