import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './My_Task/task1/task1.component';
import { Task2Component } from './My_Task/task-2/task-2.component';

const routes: Routes = [
  {path:'',redirectTo:'task-1',pathMatch:'full'},
  {
    path:'task-1',component:Task1Component
  },
  {
    path:'task-2',component:Task2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
