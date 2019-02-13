import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService{
    constructor(private http:HttpClient){
    }

    consult (){
        const url = 'http://localhost:8089/users';
        return this.http.get(url);
    }
    insert (data:any){
      const url = 'http://localhost:8089/users';
      return this.http.post(url,JSON.stringify(data));
    }

    delete (id){
        const url = 'http://localhost:8089/users?id=' + id;
        return this.http.delete(url);
    }

    update (data: any){
        const url = 'http://localhost:8089/users';
        return this.http.put(url, data);
    }

}

