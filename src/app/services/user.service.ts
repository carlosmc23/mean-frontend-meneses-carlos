import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { User } from '../model/user';

@Injectable()
export class UserService {

  myHttpClient: HttpClient;

  constructor(httpclient: HttpClient) {
    this.myHttpClient = httpclient;
  }

  public getUserList(): User[] {
    let userList: User[] = [];

    userList.push({
      name: 'Carlos 0',
      lastname: 'Beltran',
      username: 'carlos123',
      email: 'carlos@correo.com',
      avatar: 'avatarCarlos'
    });
    userList.push({
      name: 'Carlos 1',
      lastname: 'Beltran',
      username: 'carlos123',
      email: 'carlos@correo.com',
      avatar: 'avatarCarlos'
    });
    return userList;
  }
}
