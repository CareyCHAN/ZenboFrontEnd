import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showTime = '';
  today = new Date();
  todayYear = this.today.getFullYear();
  todayMonth = this.today.getMonth() + 1;
  todayDate = this.today.getDate();

  getTime() {
    setInterval(() => {
      this.today = new Date();
      this.showTime = `${this.today.getHours()}:${this.today.getMinutes()}:${this.today.getSeconds()}`;
    }, 1000);
  }
  constructor() { }

  ngOnInit() {
    this.getTime();
  }

}
