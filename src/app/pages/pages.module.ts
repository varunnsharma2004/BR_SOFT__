import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { ButtonComponent } from '../Components/button/button.component';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SidebarComponent } from '../Components/sidebar/sidebar.component';
import { SportComponent } from './sport/sport.component';
import { InplayComponent } from './inplay/inplay.component';
import { CasinoComponent } from './casino/casino.component';
import { HorseRaceComponent } from './horse-race/horse-race.component';
import { HorseSportComponent } from './horse-sport/horse-sport.component';
import { AccountComponent } from './account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginSignUpComponent,
    ButtonComponent,
    NavbarComponent,
    HomePageComponent,
    SidebarComponent,
    SportComponent,
    InplayComponent,
    CasinoComponent,
    HorseRaceComponent,
    HorseSportComponent,
    AccountComponent,
    

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    

    
  ]
})
export class PagesModule { }
