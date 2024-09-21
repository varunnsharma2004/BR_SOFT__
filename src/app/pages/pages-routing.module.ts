import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SportComponent } from './sport/sport.component';
import { InplayComponent } from './inplay/inplay.component';
import { CasinoComponent } from './casino/casino.component';
import { HorseRaceComponent } from './horse-race/horse-race.component';
import { HorseSportComponent } from './horse-sport/horse-sport.component';
import { AccountComponent } from './account/account.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomePageComponent}, 
  { path: 'login', component: LoginSignUpComponent },
  { path: 'sport', component:  SportComponent },
  { path: 'inplay', component:  InplayComponent },
  { path: 'casino', component:  CasinoComponent },
  { path: 'horse-racing', component:  HorseRaceComponent },
  { path: 'horse-sport', component:  HorseSportComponent },
  { path: 'acc-statement', component:  AccountComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
