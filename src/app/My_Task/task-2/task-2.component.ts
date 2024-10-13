import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-2',
  templateUrl: './task-2.component.html',
  styleUrls: ['./task-2.component.css']
})
export class Task2Component {
  fieldType: { type: any, label: any, placeholder: any, option: any[] }[] = [];
  buttons: any[] = [
    { name: 'text', type: 'primary' },
    { name: 'email', type: 'warning' },
    { name: 'password', type: 'secondary' },
    { name: 'radio', type: 'info' },
    { name: 'checkbox', type: 'danger' },
    { name: 'select', type: 'primary' }
  ];
  fieldName: any;
  fieldPopUp: boolean = false;
  Radiofields: { id: number, value: string }[] = [];
  Checkfields:{id:number,value:string}[]=[];
  selectFields:{id:any,value:string}[]=[];
  Title: any = '';
  Placeholder: any = ''
  R_ID: number = 1;
  C_ID: number = 1;
  S_ID: number = 1;

  OpenFieldPopUp(val: any) {
    this.fieldName = val;
    this.fieldPopUp = true;
  }
  close() {
    this.fieldPopUp = false;
    this.fieldName = '';
    this.Radiofields = [];
    this.size=0;
   this.Title='';
   this.Placeholder='';
 

  }
  size: number = 0;

 
  addRedio_Check_Select_Fields() {
    if(this.fieldName=='radio'){
    this.Radiofields.push({ id: this.R_ID, value: '' });
    this.size=this.R_ID;
    this.R_ID++;
   
    }
    if(this.fieldName=='checkbox'){
      this.Checkfields.push({id:this.C_ID,value:''});
      this.size=this.C_ID;
      this.C_ID++;
    
    }
    if(this.fieldName=='select'){
      this.selectFields.push({id:this.S_ID,value:''})
      this.size=this.S_ID;
      this.S_ID++;
    }
    
    // this.size=0;
    // this.ID++;
    debugger;

  }

  removeRedioField(id: number) {
    this.Radiofields = this.Radiofields.filter(field => field.id !== id);
    this.size--;
  }
  removeCheckField(id:number){
    this.Checkfields=this.Checkfields.filter(flied=>flied.id!==id)
    this.size--;
  }
  removeSelectVal(id:any)
  {
    this.selectFields=this.selectFields.filter(fl=>fl.id!=id);
    this.size--
  }

  AddFields() {
    if (this.fieldName == 'text' || this.fieldName == 'email' || this.fieldName == 'password') {
      this.fieldType.push({
        type: this.fieldName,
        label: this.Title,
        placeholder: this.Placeholder,
        option: []
      })
    }
    if (this.fieldName == 'radio') {
      this.fieldType.push({
        type: this.fieldName,
        label: this.Title,
        placeholder: this.Placeholder,
        option: this.Radiofields
      })
    }
    if (this.fieldName == 'checkbox') {
      this.fieldType.push({
        type: this.fieldName,
        label: this.Title,
        placeholder: this.Placeholder,
        option: this.Checkfields
      })
    }
    if (this.fieldName == 'select') {
      this.fieldType.push({
        type: this.fieldName,
        label: this.Title,
        placeholder: this.Placeholder,
        option: this.selectFields
      })
    }

    Swal.fire({
      title: "Field Added!",
      text: "Your "+this.fieldName +" field is Added.",
      icon: "success",
      showConfirmButton: false,
      timer: 1500
    })
    this.fieldPopUp=false;
    this.Title='';
    this.Placeholder='';
    this.Checkfields=[];
    this.Radiofields=[];
    this.selectFields=[];
    this.size=0;
    debugger


  }

}
