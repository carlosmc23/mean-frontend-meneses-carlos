import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormEditComponent } from './user-form-edit/user-form-edit.component';
import { UserFormCreateComponent } from './user-form-create/user-form-create.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    UserFormEditComponent,
    UserFormCreateComponent,
    HomeComponent,
    UserViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
