import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicehoursComponent } from './servicehours.component';


const routes: Routes = [
  {
    path: '',
    component: ServicehoursComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicehoursRoutingModule { }
