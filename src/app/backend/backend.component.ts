import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  showTime = '';
  today = new Date();
  todayYear = this.today.getFullYear();
  todayMonth = this.today.getMonth() + 1;
  todayDate = this.today.getDate();

  usersdata: Users[];
  positiondata: Position[];
  activitydata: Activity[];

  constructor(private http: HttpClient, private router: Router) { }

  ActivityColumns: string[] = ['id', 'service', 'time'];
  PositionColumns: string[] = ['id', 'location', 'updatedAt'];
  UsersColumns: string[] = ['id', 'userName', 'passWord', 'emailId', 'createdAt', 'updatedAt'];

  activitydataSource: any;
  usersdataSource: any;
  positiondataSource: any;
  // dataSource2 = new MatTableDataSource<Position>(POSITION_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginator2: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginator3: MatPaginator;

  ngOnInit() {
    // this.dataSource2.paginator = this.paginator;
    // this.GetUsers();

    // this.GetPosition();
    // this.GetActivity();
    this.getTime();
  }

  // GetUsers() {
  //   this.http.get<Users[]>('http://120.110.40.123:8080/api/v1/users').subscribe(data => {
  //     this.usersdata = data;
  //     this.usersdataSource = new MatTableDataSource<Users>(this.usersdata);
  //     this.usersdataSource.paginator = this.paginator;
  //   });
  // }

  // GetActivity() {
  //   this.http.get<Activity[]>('http://120.110.40.123:8080/api/v1/activitys').subscribe(data => {
  //     this.activitydata = data;
  //     this.activitydataSource = new MatTableDataSource<Activity>(this.activitydata);
  //     this.activitydataSource.paginator2 = this.paginator2;
  //   });
  // }

  // GetPosition() {
  //   this.http.get<Position[]>('http://120.110.40.123:8080/api/v1/location').subscribe(data => {
  //     this.positiondata = data;
  //     this.positiondataSource = new MatTableDataSource<Position>(this.positiondata);
  //     this.positiondataSource.paginator3 = this.paginator3;
  //   });
  // }

  logout() {
    alert(' 登出成功 ');
    this.router.navigate(['/home']);
  }
  getTime() {
    setInterval(() => {
      this.today = new Date();
      this.showTime = `${this.today.getHours()}:${this.today.getMinutes()}:${this.today.getSeconds()}`;
    }, 1000);
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

export interface Activity {
  id: number;
  service: string;
  time: number;
}

export interface Position {
  id: number;
  location: string;
  updatedAt: number;
}
