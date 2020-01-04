import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  PositionColumns: string[] = ['id', 'location', 'updatedAt'];
  positiondataSource: any;

  positiondata: Position[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.GetPosition();
  }
  constructor(private http: HttpClient) { }
  GetPosition() {
    this.http.get<Position[]>('http://120.110.40.95:8080/api/v1/location').subscribe(data => {
      this.positiondata = data;
      this.positiondataSource = new MatTableDataSource<Position>(this.positiondata);
      this.positiondataSource.paginator = this.paginator;
    });
  }

}
export interface Position {
  id: number;
  location: string;
  updatedAt: number;
}
