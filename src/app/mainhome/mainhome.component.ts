import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPostDialogComponent } from '../dashbord/blog/add-post-dialog/add-post-dialog.component';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent implements OnInit {

  isCollapsed: boolean = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPostDialogComponent);
      // const dialogRef =
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
  HavingIssues() {
    alert('如有任何問題請寫信至zenbo10530041@gmail.com');
  }
}
