import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZenboassistantComponent } from './zenboassistant.component';


const routes: Routes = [
  {
    path: '',
    component: ZenboassistantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZenboassistantRoutingModule { }
