import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.css']
})
export class InputFieldsComponent {
@Input() Fieldstype:any[]=[];

constructor()
{
  console.log(this.Fieldstype);
  debugger
}
DeleteField(label:any)
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
        text: "Your field has been deleted.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500

      }).then((res)=>{
        const indx=this.Fieldstype.findIndex(i=>i.label==label);
        const remove= this.Fieldstype.splice(indx,1);
      });
    }
  });
 

}
submitForm() {
  if (this.Fieldstype.length === 0) {
      // alert("No fields available to submit!");
      Swal.fire({
        title: "Error!",
        text: "No fields available to submit!",
        icon: "error",
        showConfirmButton: true,
      })
      return;
  }
  Swal.fire({
    title: "Submitted!",
    text: "Form submitted successfully",
    icon: "success",
    showConfirmButton: true,
  }).then(r=>{
    location.reload()
  })
  
}



}

