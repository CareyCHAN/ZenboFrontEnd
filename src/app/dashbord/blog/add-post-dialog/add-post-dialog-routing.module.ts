import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostDialogComponent } from './add-post-dialog.component';
import { BackendComponent } from 'src/app/backend/backend.component';


const routes: Routes = [
  {
    path: '',
    component: AddPostDialogComponent
  },
  {
    path: 'backend',
    component: BackendComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloorRoutingModule { }
