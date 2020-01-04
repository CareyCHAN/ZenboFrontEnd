import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName = '';
  passWord = '';
  emailId = '';
  dateOfBirth = '1231141532000';


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  registerNewUser() {
    this.http
      .post(
        "http://localhost:8080/api/v1/users",
        {

          "userName": this.userName,
          "passWord": this.passWord,
          "emailId": this.emailId,
          "dateOfBirth": this.dateOfBirth

        },
        {}
      )
      .subscribe();
      this.router.navigate(['']);
      alert('Success');
  }

}
