import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) {
    console.log('Funcionando')
  }

  consult (){
    const url = 'http://localhost:8089/books';
    return this.http.get(url);
  }

  insert (data:any){
    const url = 'http://localhost:8089/books';
    return this.http.post(url,JSON.stringify(data));
  }

  delete (id){
    const url = 'http://localhost:8089/books?id=' + id;
    return this.http.delete(url);
  }

  update (data: any){
    const url = 'http://localhost:8089/books';
    return this.http.put(url, data);
  }

}
