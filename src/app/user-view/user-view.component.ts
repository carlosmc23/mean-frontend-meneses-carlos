import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from "../services/user.service";

@Component({
  selector: 'umss-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(
    private activateroute: ActivatedRoute,
    private userservice: UserService
  ) { }
  userid: string;
  userViewed: User = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    avatar: ''
  };
  ngOnInit() {
    this.activateroute.params.subscribe(
      (paramss) => {
        //console.log('parametros resibidos', paramss.id);
        this.userid = paramss.id;
        this.userservice.getUserById(this.userid).subscribe(
          (response) => {
            console.log('respuesta del servidor', response);
            this.userViewed = response.data;
          }, (error) => {
            console.log('error del servidor', error);
          }
        )
      }
    )
  }
}




