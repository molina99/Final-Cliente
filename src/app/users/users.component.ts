import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  url = 'http://localhost:8089/users';
  users: User[];

  constructor(
    private httpClient:HttpClient,
    private userService: UserService) {}

  ngOnInit() {
    this.get();
  }

  get(){
    this.httpClient.get(this.url).subscribe(
      (data: User[])=>{
        this.users = data;
      });
  }

  delete(id){
    if(confirm('Desea eliminarlo?')){
      this.userService.delete(id).subscribe(response=>{
        console.log(response);
        this.get();
      },(error) =>{
        console.log(error);
      });
    }
  }
}
