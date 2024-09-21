import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../../../light-theme.css','../../../responsive.css']
})
export class NavbarComponent {
holderName:any='';
auth:boolean=false;
constructor(private route:Router)
{
  this.holderName =localStorage.getItem('profile');
}
logout(){
  this.route.navigate(['/user/login'])
}

}
