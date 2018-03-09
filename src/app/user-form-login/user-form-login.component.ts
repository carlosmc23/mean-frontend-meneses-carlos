import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'umss-user-form-login',
  templateUrl: './user-form-login.component.html',
  styleUrls: ['./user-form-login.component.css']
})
export class UserFormLoginComponent implements OnInit {

  constructor() { }

credentials={
  username:'',
  password:''
}

  ngOnInit() {
  }
login():void{
  console.log('credenciales',this.credentials);
}
}
