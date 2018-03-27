import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'umss-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  myUser: User = {
    name: '',
    lastname: '',
    username: '',
    email: ''
  }
  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authservice.getMyPersonalInformation()
      .subscribe(
        (response) => {
          //console.log('respuesta: ', response);
          this.myUser = response.data;
        }, (error) => {
          console.log('error: ', error);
        }
      )
  }
  logout(): void{
    let confirmar = confirm('Esta seguro de terminar la sesion');
    if(confirmar)
    this.authservice.logout()
    .subscribe(
      (response)=>{
        sessionStorage.removeItem('token');
        console.log('respuesta del servidor', response);
        alert('la session a terminado');
          this.router.navigate(['home'])
      },(error)=>{
        console.log('error: ',error);
      }
    )
  }

}
