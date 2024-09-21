import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
UserDetail:any[]=[];
userLogin:boolean =false;

  constructor() {
    this.UserDetail=[{
      Username:"admin@gmail.com",
      Password:'admin@1234',
    }]
   }

    getuserDetail(){
    return this.UserDetail;
   }
   addUser(Username:any,Password:any){
    const userExists = this.UserDetail.some((item) => item.Username == Username);
    if(!userExists)
    {
      this.UserDetail.push({  
        Username:Username,
         Password:Password})
      return true;
    }
    else{
      return false;
      
    }
    
   }
   logiUser(Username:any,Password:any){
     this.userLogin=this.UserDetail.some((item)=> item.Username == Username && item.Password==Password)
 debugger
 console.log(this.userLogin)
    if(this.userLogin)
 {

  return true
 }
 else
 { return false}
    debugger 
  }

  authService():boolean
  {
    return this.userLogin;
  }
}
