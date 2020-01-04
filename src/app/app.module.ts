import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BackendComponent } from './backend/backend.component';
import { LoginComponent } from './login/login.component';
import { AddPostDialogComponent } from './dashbord/blog/add-post-dialog/add-post-dialog.component';
import { LayoutComponent } from './dashbord/layout/layout.component';
import { MainhomeComponent } from './mainhome/mainhome.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddPostDialogComponent,
    LayoutComponent,
    MainhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddPostDialogComponent]
})
export class AppModule { }
