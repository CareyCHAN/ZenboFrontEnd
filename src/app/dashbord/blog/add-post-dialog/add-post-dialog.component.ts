import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CrossFieldsErrorMatcher } from '../../valid/cross-field-error-matcher';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AppComponent } from 'src/app/app.component';
import { from } from 'rxjs';

export interface Users {
  id: number;
  userName: string;
  passWord: string;
  emailId: string;
  dateOfBirth: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.css']
})
export class AddPostDialogComponent implements OnInit {
  group: FormGroup;
  errorMatcher: CrossFieldsErrorMatcher;
  usersdata: Users;
  flag = 0;
  test:any;
  count = 0;

  constructor(private fb: FormBuilder,
    private errorMatcherProvider: CrossFieldsErrorMatcher,
    public dialogRef: MatDialogRef<AppComponent>,
    private http: HttpClient,
    private router: Router,public dialog: MatDialog) {
    this.errorMatcher = this.errorMatcherProvider;
  }

  formModel: FormGroup;
  ngOnInit() {
    this.group = this.fb.group({
      account: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // identifying: ['', [Validators.required]]
    });
    this.GetUsers();

    /** validators for fromGroup */
    // { validators: [genderIdRelatedValidator] });

    // this.group.valueChanges.subscribe(res => { console.log(this.group) });
  }

  GetUsers() {
    this.http.get<Users>("http://120.110.40.95:8080/api/v1/users").subscribe(data => {
      this.usersdata = data;
      this.test = this.usersdata;
    });
  }

  /** convenience getter for easy access to form fields */
  onNoClick(): void {
    this.dialogRef.close();
  }
  get form(): { [key: string]: AbstractControl; } { return this.group.controls; }

  validation() {
    if(this.group.value.account.length < 4 || this.group.value.password.length < 6){
      alert('請符合帳號密碼輸入長度');
    } else {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0 ; i < this.test.length ; i++) {
        if ( this.group.value.account === this.test[i].userName
          && this.group.value.password === this.test[i].passWord ) {
          this.flag = 1;
          break;
        } else {
          this.count++;
        }
      }
      if (this.flag === 1) {
        alert('登入成功');
        this.router.navigate(['/backend'], {
          queryParams: {
            user: '管理員'
          }
        });
      } else {
        alert('帳號密碼輸入錯誤，請修正');
      }
    }
  }
  myFunc1(evt: KeyboardEvent) {
    if (evt.keyCode === 13){
      document.getElementById("pass").focus();
    }
  }

  myFunc2(evt: KeyboardEvent) {
    if (evt.keyCode === 13){
      document.getElementById("1").focus();
    }
  }
}

