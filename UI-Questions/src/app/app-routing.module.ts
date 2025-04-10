import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';

const routes: Routes = [
  {
    path:'login', component:LoginComponent,
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path: 'admin', component:AdminPageComponent, canActivate:[AuthGuard,RoleGuard], data: { role: 'Admin' }
  },
  {
    path:'user', component :UserPageComponent,canActivate:[AuthGuard,RoleGuard],data: { role: 'User' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
