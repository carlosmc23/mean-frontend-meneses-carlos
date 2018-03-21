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
  getUserList(): Observable<any> {
    return this.myHttpClient.get(userApiUrl);
  }
  getUserById(userid: string): Observable<any> {
    return this.myHttpClient.get(`${userApiUrl}/${userid}`);
  }
  createUser(newUser: User): Observable<any>{
    return this.myHttpClient.post(userApiUrl, newUser);
  }
  deleteUser(deletingUserId: string ):Observable<any>{
    return this.myHttpClient.delete(`${userApiUrl}/${deletingUserId}`);
  }
  updateUser(editUser: User, userId:string):Observable<any>{
    return this.myHttpClient.put(`${userApiUrl}/${userId}`, editUser);
  }
}
