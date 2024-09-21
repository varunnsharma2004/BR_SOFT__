import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule,FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.css']
})
export class LoginSignUpComponent {
  Ragistraion: FormGroup;
  loginForm:FormGroup;
  isLogin:boolean=true;
  isSignUP:boolean=false;
  constructor(private route: Router, private login: LoginService) {
    this.Ragistraion = new FormGroup({
      'userName': new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('',[Validators.required]),
      'Cpassword': new FormControl('',[Validators.required]),
    })
    this.loginForm = new FormGroup({
      'userName': new FormControl('admin@gmail.com',[Validators.required,Validators.email]),
      'password': new FormControl('admin@1234',[Validators.required]),
    })
  }
  get signIn() {
    return this.Ragistraion.controls;
  }

  registrationValidation(): boolean {
    if (this.signIn['userName'].invalid || this.signIn['password'].invalid || this.signIn['Cpassword'].invalid || this.signIn['Cpassword'].value !=this.signIn['password'].value) {
      return true;
    }
    else {
      return false;
    }

  }
  
  userAdded:boolean | undefined;
  async addUser()
  {
    
      let Username=this.Ragistraion.get('userName')?.value;
      let Password=this.Ragistraion.get('password')?.value;
      this.userAdded= this.login.addUser(Username,Password);
      if(this.userAdded)
      {
        Swal.fire({
          title: "Success!",
          text: "User Addes!",
          icon: "success"
        })
        this.isLogin=true;
        this.isSignUP=false;
        this.Ragistraion.reset();
        this.loginForm.controls['userName'].setValue(Username);
        this.loginForm.controls['password'].setValue(Password);
      }
      else{
        Swal.fire({
          title: "ERROR!",
          text: "User Alredy Exist!",
          icon: "error"
        }).then(i=>{
          location.reload();
        });
      }
    debugger
  }
  userLogin:boolean | undefined;
  async LoginUser()
  {
    let Username=this.loginForm.get('userName')?.value;
    let Password=this.loginForm.get('password')?.value;
    this.userLogin=this.login.logiUser(Username,Password);
    if(this.userLogin)
    {
     this.route.navigate(['user/home'])
     localStorage.setItem("profile",Username);
    }
    else{
      Swal.fire({
        title: "ERROR!",
        text: "Enter Correct Detail's!",
        icon: "error"
      }).then(i=>{
        // location.reload();
        this.loginForm.reset()
      });
    }
  }
  loginStatus(){
    this.isLogin=true;
    this.isSignUP=false;
  }
  SignupStatus(){
    this.isLogin=false;
    this.isSignUP=true;
  }

}