import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'umss-user-form-edit',
  templateUrl: './user-form-edit.component.html',
  styleUrls: ['./user-form-edit.component.css']
})
export class UserFormEditComponent implements OnInit {


  userId: string;

  userEdited: User = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  }

  constructor(
    private userservice: UserService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(
      (paramss) => {
        this.userId = paramss.id;
        this.userservice.getUserById(this.userId).subscribe(
            (response) => {
              this.userEdited = response.data;
            }, (error) => {
              console.log('error: ', error);
            }
          )
      }
    )
  }
  UpdateUser(): void {
    this.activatedroute.params.subscribe(
      (paramss) => {
        this.userId = paramss.id;
        this.userservice.getUserById(this.userId).subscribe(
          (response) => {
            this.userservice.updateUser(this.userEdited, this.userId)
              .subscribe(
                (response) => {
                  console.log('respuesta del servidor :', response);
                  alert("El usuario a sido actualizado exitosamente");
                  this.router.navigate(['/user/list']);
                }, (error) => {
                  console.log('error:', error)
                }
              )
          }, (error) => {
            console.log('Error: ', error)
          }
        )

      }
    )
  }

}
