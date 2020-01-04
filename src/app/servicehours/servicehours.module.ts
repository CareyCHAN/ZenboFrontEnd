import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicehoursRoutingModule } from './servicehours-routing.module';
import { ServicehoursComponent } from './servicehours.component';


@NgModule({
  declarations: [ServicehoursComponent],
  imports: [
    CommonModule,
    ServicehoursRoutingModule
  ]
})
export class ServicehoursModule { }
