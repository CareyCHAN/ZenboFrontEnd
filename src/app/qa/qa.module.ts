import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QARoutingModule } from './qa-routing.module';
import { QAComponent } from '../qa/qa.component';


@NgModule({
  declarations: [QAComponent],
  imports: [
    CommonModule,
    QARoutingModule
  ]
})
export class QAModule { }
