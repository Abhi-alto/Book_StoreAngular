import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/forgotPassword/forgot-password/forgot-password.component';
import { GetAllbooksComponent } from './Components/get-allbooks/get-allbooks.component';
import { GetBookComponent } from './Components/getBook/get-book/get-book.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetPasswordComponent } from './Components/resetPassword/reset-password/reset-password.component';

const routes: Routes = [
  {path:"signup",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"resetPassword",component:ResetPasswordComponent},
  {path:"dashboard",component:DashboardComponent,
    children:[
      {path:"books",component:GetAllbooksComponent},
      {path:"getBook",component:GetBookComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
