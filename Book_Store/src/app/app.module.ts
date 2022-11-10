import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './Components/resetPassword/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Components/forgotPassword/forgot-password/forgot-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

import { DisplayBookComponent } from './Components/displayBook/display-book/display-book.component';
import { GetAllbooksComponent } from './Components/get-allbooks/get-allbooks.component';
import { GetBookComponent } from './Components/getBook/get-book/get-book.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
//import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatMenuModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    DisplayBookComponent,
    GetAllbooksComponent,
    GetBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
