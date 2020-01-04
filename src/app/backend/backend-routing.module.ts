import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackendComponent } from './backend.component';
import { ActivityComponent } from './activity/activity.component';
import { PositionComponent } from './position/position.component';
import { AdministratorComponent } from './administrator/administrator.component';


const routes: Routes = [
  {
    path: '',
    component: BackendComponent,
    children: [
      {
        path: '',
        redirectTo: 'activity',
        pathMatch: 'full'
      },
      {
        path: 'activity',
        component: ActivityComponent
      },
      {
        path: 'position',
        component: PositionComponent
      },
      {
        path: 'administrator',
        component: AdministratorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
