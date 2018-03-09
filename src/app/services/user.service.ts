import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { User } from '../model/user';

const userApiUrl = 'http://localhost:3000/users';

@Injectable()
export class UserService {

  myHttpClient: HttpClient;

  constructor(httpclient: HttpClient) {
    this.myHttpClient = httpclient;
  }
  /*
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
    }*/
  public getUserList(): Observable<any> {
    return this.myHttpClient.get(userApiUrl);
  }
  public getUserById(userid: string): Observable<any> {
    return this.myHttpClient.get(`${userApiUrl}/${userid}`);
  }

  createUser(newUser: User): Observable<any>{
    return this.myHttpClient.post(userApiUrl, newUser);
  }

}
