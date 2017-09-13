import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'operations',
    loadChildren: './views/operations/operations.module#OperationsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
