import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Constant
import { appPath } from './app-path.const';
import { AddPostDialogComponent } from './dashbord/blog/add-post-dialog/add-post-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zenbo';
  path = appPath;

  animal: string;
  name: string;
  count: number = 0;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPostDialogComponent);
      // const dialogRef =
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
  //   changePosition() {
  //     this.dialModalRef.updatePosition({ top: '50px', left: '50px' });
  // }
}
