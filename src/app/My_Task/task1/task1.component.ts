import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  userData: any[] = [];
  filterData:any[]=[];
  addNew: boolean = false;
  updateUser: boolean = false;
  UserForm: FormGroup;
  pageSize=10;
  currecntPage=1;
  userId:any;

  constructor(private ser: UserServiceService) {
    this.userData = ser.getUserData();
    this.filterData=this.userData;
    this.userId=this.userData.length+1;
    this.UserForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'position': new FormControl('', [Validators.required]),
    });

  }
  AddNewPopUp() {
    this.addNew = true;
  }
  close() {
    this.addNew = false;
    this.updateUser = false;
    this.UserForm.reset();
  }

  isUserAdd: boolean = false;
  
  addUser() {
    let name = this.UserForm.get('name')?.value;
    let email = this.UserForm.get('email')?.value;
    let position = this.UserForm.get('position')?.value;
    this.isUserAdd = this.ser.addNewUser(this.userId,name, email, position);
    this.userId++;
    if (this.isUserAdd) {
      this.filterData=this.userData;
      Swal.fire({
        position: "center",
        title: "Success",
        text: "User Added",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      }).then((res) => {
        this.addNew = false;
        this.UserForm.reset();
      });

    }
    else {
      Swal.fire({
        position: "center",
        title: "Wrong",
        text: "User Already Exist",
        icon: "error",
        showConfirmButton: false,
        timer: 1500
      }).then((res) => {
        this.addNew = false;
        this.UserForm.reset();
      });
    }
  }
  UserIndx:any;
  SelectUser(id:any,event: any) {
    this.UserIndx=id;
    this.updateUser = true;
    this.UserForm.setValue({
      name: event.name,
      email: event.email,
      position: event.position
    });
     
    debugger

  }
  userUpdate(){
    const data={
      id:this.UserIndx,
        name:this.UserForm.get('name')?.value,
        email:this.UserForm.get('email')?.value,
        position:this.UserForm.get('position')?.value,
      }
      
      const userUpdate =this.ser.updateUser(data,this.UserIndx);
      if(userUpdate)
      {
        Swal.fire({
          position: "center",
          title: "Success",
          text: "User Update",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        }).then((res) => {
          this.addNew = false;
          this.UserForm.reset();
          this.updateUser=false;
        });
  
      }
      else {
        Swal.fire({
          position: "center",
          title: "Wrong",
          text: "User Already Exist",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        }).then((res) => {
          this.addNew = false;
          this.updateUser=false;
          this.UserForm.reset();
        });
      }
  }
  userDelete(Id:any)
  {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
  
        }).then((res)=>{
          this.ser.userDelete(Id);
          this.userId--;
        });
      }
    });
   
  }
  filter(val:any)
  {
    const value=val.value;
    debugger
    this.filterData = this.userData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

  }
}
