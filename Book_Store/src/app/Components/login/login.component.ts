import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void
  {
      this.loginForm=this.fb.group(
      {
        Email: ['', [Validators.required, Validators.email]],
        Password:['',Validators.required]
      })
  }
  onSubmit()
  {
    if(this.loginForm.valid)
    {
      console.log("valid data",this.loginForm.value);
      console.log("do api call");
      let data=
      {
        email: this.loginForm.value.Email,
        password: this.loginForm.value.Password
      }
      this.user.login(data).subscribe((response:any)=>
      {
          console.log(response.token+"Token Printed")
          localStorage.setItem('token' , response.token)
      })
    }
 
    else
    {
      console.log("invalid data",this.loginForm.value);
      console.log("no api call");
    }
  }
}
