import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/users.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  id: any;
  editing: boolean = false;
  users: User[];

  constructor(private userService:UserService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
        this.id = this.activatedRoute.snapshot.params['id'];
        if(this.id){
          this.editing = true;
          this.userService.consult().subscribe((data: User[])=>{
            this.users = data;
            this.user = this.users.find((m) => {
              return m.id == this.id
            });
            console.log(this.user);
          },(error)=>{
            console.log(error);
          });
        }else{
          this.editing = false;
        }
      }

  ngOnInit() {
    this.user = new User();
  }

  register(user){
    if (this.editing){
      this.userService.update(this.user).subscribe(
        response=>{
          alert ('Usuario Actualizado');
          this.router.navigate(['users']);
        },
        error=>{
          console.log('error');
          console.log(error.valueOf().error.errorInfo[0]);
          if(error.valueOf().error.errorInfo[0]=='23505'){
            alert ('correo duplicado');
          }
        });
    }else{
      this.userService.insert(this.user).subscribe(
        response=>{
          alert ('Usuario Registrado');
          this.router.navigate(['users']);
        },
        error=>{
          console.log('error');
          console.log(error.valueOf().error.errorInfo[0]);
          if(error.valueOf().error.errorInfo[0]=='23505'){
            alert ('correo duplicado');
          }
        });
    }
}


}
