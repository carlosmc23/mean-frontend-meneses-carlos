import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormCreateComponent } from './user-form-create/user-form-create.component';
import { UserFormEditComponent } from './user-form-edit/user-form-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserFormLoginComponent } from './user-form-login/user-form-login.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleViewComponent } from './article-view/article-view.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user/list',
    component: UserListComponent
  },
  {
    path: 'user/create',
    component: UserFormCreateComponent
  },
  {
    path: 'user/:id/edit',
    component: UserFormEditComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'user/:id/view',
    component: UserViewComponent
  },
  {
    path: 'user/login',
    component: UserFormLoginComponent
  },
  {
    path: 'user/information',
    component: UserInformationComponent
  },
  {
    path: 'article/list',
    component: ArticleListComponent
  },
  {
    path: 'article/:id/view',
    component: ArticleViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
