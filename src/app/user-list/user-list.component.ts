import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'umss-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];
  /*usertest: User = {
    name: 'Carlos',
    lastname: 'Beltran',
    username: 'carlos123',
    email: 'carlos@correo.com',
    avatar: 'avatarCarlos'
  };*/

  constructor() {
    this.userList.push({
      name: 'Carlos 0',
      lastname: 'Beltran',
      username: 'carlos123',
      email: 'carlos@correo.com',
      avatar: 'avatarCarlos'
    });
    this.userList.push({
      name: 'Carlos 1',
      lastname: 'Beltran',
      username: 'carlos123',
      email: 'carlos@correo.com',
      avatar: 'avatarCarlos'
    });
    this.userList.push({
      name: 'Carlos 2',
      lastname: 'Beltran',
      username: 'carlos123',
      email: 'carlos@correo.com',
      avatar: 'avatarCarlos'
    });
    this.userList.push({
      name: 'Carlos 3',
      lastname: 'Beltran',
      username: 'carlos123',
      email: 'carlos@correo.com',
      avatar: 'avatarCarlos'
  });
  this.userList.push({
    name: 'Carlos 4',
    lastname: 'Beltran',
    username: 'carlos123',
    email: 'carlos@correo.com',
    avatar: 'avatarCarlos'
});





  }

  ngOnInit() {
  }

}
