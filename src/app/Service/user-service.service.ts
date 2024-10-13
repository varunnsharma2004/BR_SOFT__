import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userData: any[] = []
  constructor() {
    this.userData = [
      {
      id:1,
        name: "karan",
        email: "karan@gmail.com",
        position: "developer",
      },
      {
        id:2,
        name: "dinesh",
        email: "dinesh@gmail.com",
        position: "sales",
      },
      {
        id:3,
        name: "samir",
        email: "samir@gmail.com",
        position: "account",
      },
      {
        id:4,
        name: "suresh",
        email: "suresh@gmail.com",
        position: "HR",
      },
      


    ]
  }

  getUserData() {
    return this.userData;
  }

  addNewUser(id:any,name: any, email: any, position: any) {
    const UserExists = this.userData.some((i) => i.email === email)
    if (!UserExists) {
      this.userData.push({
        id:id,
        name: name,
        email: email,
        position: position
      })
      return true;
    }
    return false;
  }
  updateUser(data: any, id: any) {

const indx=this.userData.findIndex((i)=>i.id===id);
    this.userData[indx] = data;
    return true;

  }

  userDelete(id:any){
    const indx=this.userData.findIndex((i)=>i.id==id);
    this.userData.splice(indx,1);
    debugger
  }

}
