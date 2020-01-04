import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  usersdata: Users[];
  constructor(private http: HttpClient) { }
  UsersColumns: string[] = ['id', 'userName', 'passWord', 'emailId', 'createdAt', 'updatedAt'];
  usersdataSource: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.GetUsers();
  }
  GetUsers() {
    this.http.get<Users[]>('http://120.110.40.95:8080/api/v1/users').subscribe(data => {
      this.usersdata = data;
      this.usersdataSource = new MatTableDataSource<Users>(this.usersdata);
      this.usersdataSource.paginator = this.paginator;
    });
  }
}
export interface Users {
  id: number;
  userName: string;
  passWord: string;
  emailId: string;
  createdAt: string;
  updatedAt: string;
}
