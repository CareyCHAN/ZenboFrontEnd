import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendComponent } from './backend.component';
import { BackendRoutingModule } from './backend-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { PositionComponent } from './position/position.component';
import { AdministratorComponent } from './administrator/administrator.component';

// tslint:disable-next-line: max-line-length
import { MatTableModule, MatPaginatorModule, MatButtonToggleModule, MatTabsModule, MatButtonModule, MatIconModule} from '@angular/material';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    BackendComponent,
    ActivityComponent,
    PositionComponent,
    AdministratorComponent
  ],
  imports: [
    CommonModule,
    BackendRoutingModule,
    NgxEchartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class BackendModule { }
