import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  constructor(private fb:FormBuilder,private User:UserService) { }

  ngOnInit(): void {this.registerForm=this.fb.group({
    Name:['',Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Password:['',[Validators.required,Validators.minLength(8)]],
    Phone_Num:['',Validators.required],
  })
}
  onSubmit()
  {
    if(this.registerForm.valid)
    {
      console.log("valid data",this.registerForm.value);
      console.log("do api call");
      //api call : left side backend match and right side frontend match
      let data=
      {
        name:this.registerForm.value.Name,
        email: this.registerForm.value.Email,
        password: this.registerForm.value.Password,
        phone_Num: this.registerForm.value.Phone_Num
      }
      this.User.register(data).subscribe((result:any)=>
      {
          console.log(result)
      })
    }
    else
    {
      console.log("invalid data",this.registerForm.value);
      console.log("no api call");
    }
  }

}
