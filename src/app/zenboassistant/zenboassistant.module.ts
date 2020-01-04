import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZenboassistantRoutingModule } from './zenboassistant-routing.module';
import { ZenboassistantComponent } from './zenboassistant.component';


@NgModule({
  declarations: [ZenboassistantComponent],
  imports: [
    CommonModule,
    ZenboassistantRoutingModule
  ]
})
export class ZenboassistantModule { }
