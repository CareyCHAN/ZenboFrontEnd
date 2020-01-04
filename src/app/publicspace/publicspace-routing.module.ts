import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicspaceComponent } from './publicspace.component';


const routes: Routes = [
  {
    path: '',
    component: PublicspaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicspaceRoutingModule { }
