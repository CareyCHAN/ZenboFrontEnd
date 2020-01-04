import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicspaceRoutingModule } from './publicspace-routing.module';
import { PublicspaceComponent } from './publicspace.component';

@NgModule({
  declarations: [PublicspaceComponent],
  imports: [
    CommonModule,
    PublicspaceRoutingModule
  ]
})
export class PublicspaceModule { }
