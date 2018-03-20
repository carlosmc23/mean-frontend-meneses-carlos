import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'umss-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];

  constructor(
    private userservice: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.userservice.getUserList().subscribe(
      (response) => {
        //console.log('respuesta del servidor: ', response);
        this.userList = response.data;
      }, (error) => {
        console.log('error ', error);
      }
    );
  }
  viewUser(userId): void {
    this.router.navigate(['user', userId, 'view']);
  }
  deleteUser(userIdDel: string, userName:string, userLastName:string): void {
    let confirmar = confirm('esta seguro de eliminar al ususario '+userName+' '+userLastName);
    if (confirmar)
      this.userservice.deleteUser(userIdDel)
        .subscribe(
          (response) => {
            location.reload();
          }, (error) => {
            console.log('error: ', error);
          }
        )
  }

}
