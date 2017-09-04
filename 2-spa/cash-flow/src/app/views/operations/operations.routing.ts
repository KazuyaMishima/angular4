import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsComponent } from "./operations.component";

const routes: Routes = [
  {
    path: '',
    component: OperationsComponent,
    // children: [
    //   {
    //     path: 'new',
    //     component: NewComponent
    //   },
    //   {
    //     path: 'list',
    //     component: ListComponent
    //   }
    // ]
  },
  // {
  //   path: ':id',
  //   component: ItemComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
