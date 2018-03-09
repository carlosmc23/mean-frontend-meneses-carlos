import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'umss-user-form-create',
  templateUrl: './user-form-create.component.html',
  styleUrls: ['./user-form-create.component.css']
})
export class UserFormCreateComponent implements OnInit {

  userToCreate: User = {
    name: '',
    lastname: '',
    email: '',
    username: ''
  }

  constructor(private userservice: UserService) { }

  ngOnInit() {

  }
  createNewUser(): void {
    //console.log('usuario a crear', this.userToCreate);
    this.userservice.createUser(this.userToCreate)
      .subscribe(
        (response) => {
          console.log('respuesta del servidor', response);
        }, (error) => {
          console.log('error : ', error)
        }
      );
  }

}
