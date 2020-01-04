import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutGuard } from './layout/layout.guard';

// Constant
import { appPath } from './app-path.const';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { BackendComponent } from './backend/backend.component';


const routes: Routes = [
  {
    path: '',
    component: MainhomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: appPath.home,
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: appPath.zenboassistant,
        loadChildren: './zenboassistant/zenboassistant.module#ZenboassistantModule'
      },
      {
        path: appPath.servicehours,
        loadChildren: './servicehours/servicehours.module#ServicehoursModule'
      },
      {
        path: appPath.publicspace,
        loadChildren: './publicspace/publicspace.module#PublicspaceModule'
      },
      {
        path: appPath.history,
        loadChildren: './history/history.module#HistoryModule'
      },
      {
        path: appPath.register,
        loadChildren: './register/register.module#RegisterModule'
      },
      {
        path: appPath.qa,
        loadChildren: './qa/qa.module#QAModule'
      },
      {
        path: appPath.about,
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: appPath.login,
        loadChildren: './login/login.module#LoginModule'
      }
    ]
  },
  {
    path: appPath.backend,
    canActivate: [LayoutGuard],
    loadChildren: './backend/backend.module#BackendModule'
  },
  {
    path: '**',
    redirectTo: appPath.home,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
