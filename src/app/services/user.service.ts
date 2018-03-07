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

}
