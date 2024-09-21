import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path:'user',
  loadChildren:()=>import('../app/pages/pages.module')
  .then(m=> m.PagesModule)
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
