import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'umss-user-form-login',
  templateUrl: './user-form-login.component.html',
  styleUrls: ['./user-form-login.component.css']
})
export class UserFormLoginComponent implements OnInit {

  constructor(private authservice: AuthService,
    private router: Router) { }

  credentials = {
    username: '',
    password: ''
  };

  ngOnInit() {
  }
  login(): void {
    this.authservice.login(this.credentials)
      .subscribe(
        (response) => {
          //console.log('respuesta:', response);
          sessionStorage.removeItem('token');
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['user', 'information']);
        }, (error) => {
          console.log('error:', error);
        }
      );
  }
}
