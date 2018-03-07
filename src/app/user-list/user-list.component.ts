import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'umss-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usertest: User = {
    name: 'Carlos',
    lastname: 'Beltran',
    username: 'carlos123',
    email: 'carlos@correo.com',
    avatar: 'avatarCarlos'
  };
  constructor() { }

  ngOnInit() {
  }

}
