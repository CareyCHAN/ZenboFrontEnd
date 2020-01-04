import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { from, zip } from 'rxjs';
import * as moment from 'moment';
import * as echarts from 'echarts';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  activitydata: Activity[];

  ActivityColumns: string[] = ['id', 'service', 'time'];

  activitydataSource: any;


  today = new Date();
  timestamp: any;
  previousday = new Date();
  todayTime = this.today.getTime();
  monday: Date; tuesday: Date; wednesday: Date; thursday: Date; friday: Date; saturday: Date; sunday: Date;
  week: Date[] = [];
  weekday = [];
  weekList = [];
  weekChinese = ['(一)', '(二)', '(三)', '(四)', '(五)', '(六)', '(日)'];

  Monguide = 0;
  MonlibrarySearch = 0;
  MonspaceReservation = 0;
  MonlocationInquiry = 0;

  Tueguide = 0;
  TuelibrarySearch = 0;
  TuespaceReservation = 0;
  TuelocationInquiry = 0;

  Wedguide = 0;
  WedlibrarySearch = 0;
  WedspaceReservation = 0;
  WedlocationInquiry = 0;

  Thuguide = 0;
  ThulibrarySearch = 0;
  ThuspaceReservation = 0;
  ThulocationInquiry = 0;

  Friguide = 0;
  FrilibrarySearch = 0;
  FrispaceReservation = 0;
  FrilocationInquiry = 0;

  Satguide = 0;
  SatlibrarySearch = 0;
  SatspaceReservation = 0;
  SatlocationInquiry = 0;

  Sunguide = 0;
  SunlibrarySearch = 0;
  SunspaceReservation = 0;
  SunlocationInquiry = 0;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.GetActivity();
  }

  GetActivity() {
    this.http.get<any>('http://120.110.40.95:8080/api/v1/activitys').subscribe(data => {
      this.activitydata = data;
      this.activitydataSource = new MatTableDataSource<Activity>(this.activitydata);
      this.activitydataSource.paginator = this.paginator;
      this.drawBarChart();
      const myChart = echarts.init(document.getElementById('main'));
      const option = {
        title: {
          text: '各服務項目(折線圖)'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['導覽', '館藏查詢', '空間預約', '定點諮詢']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // tslint:disable-next-line: max-line-length
          data: [this.weekList[0] + '(一)', this.weekList[1] + '(二)', this.weekList[2] + '(三)', this.weekList[3] + '(四)', this.weekList[4] + '(五)', this.weekList[5] + '(六)', this.weekList[6] + '(日)']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '導覽',
            type: 'line',
            data: [this.Monguide, this.Tueguide, this.Wedguide, this.Thuguide, this.Friguide, this.Satguide, this.Sunguide]
          },
          {
            name: '館藏查詢',
            type: 'line',
            // tslint:disable-next-line: max-line-length
            data: [this.MonlibrarySearch, this.TuelibrarySearch, this.WedlibrarySearch, this.ThulibrarySearch, this.FrilibrarySearch, this.SatlibrarySearch, this.SunlibrarySearch]
          },
          {
            name: '空間預約',
            type: 'line',
            // tslint:disable-next-line: max-line-length
            data: [this.MonspaceReservation, this.TuespaceReservation, this.WedspaceReservation, this.ThuspaceReservation, this.FrispaceReservation, this.SatspaceReservation, this.SunspaceReservation]
          },
          {
            name: '定點諮詢',
            type: 'line',
            // tslint:disable-next-line: max-line-length
            data: [this.MonlocationInquiry, this.TuelocationInquiry, this.WedlocationInquiry, this.ThulocationInquiry, this.FrilocationInquiry, this.SatlocationInquiry, this.SunlocationInquiry]
          },
        ]
      };
      myChart.setOption(option);
    });
  }

  drawBarChart() {
    this.getWeekDate();
    from(this.activitydata).subscribe(e => {
      this.today = new Date(e.time);
      if (this.weekList[0] === `${this.today.getFullYear()}/${this.today.getMonth() + 1}/${this.today.getDate()}`) {
        if (e.service === '導覽') {
          this.Monguide++;
        } else if (e.service === '館藏查詢') {
          this.MonlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.MonspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.MonlocationInquiry++;
        }
      // tslint:disable-next-line: max-line-length
      } else if (this.weekList[1] === `${this.today.getFullYear()}/${this.today.getMonth() + 1}/${this.today.getDate()}`) {
        if (e.service === '導覽') {
          this.Tueguide++;
        } else if (e.service === '館藏查詢') {
          this.TuelibrarySearch++;
        } else if (e.service === '空間預約') {
          this.TuespaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.TuelocationInquiry++;
        }
      // tslint:disable-next-line: max-line-length
      } else if (this.weekList[2] === `${this.today.getFullYear()}/${this.today.getMonth() + 1}/${this.today.getDate()}`) {
        if (e.service === '導覽') {
          this.Wedguide++;
        } else if (e.service === '館藏查詢') {
          this.WedlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.WedspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.WedlocationInquiry++;
        }
      // tslint:disable-next-line: max-line-length
      } else if (this.weekList[3] === `${this.today.getFullYear()}/${this.today.getMonth() + 1}/${this.today.getDate()}`) {
        if (e.service === '導覽') {
          this.Thuguide++;
        } else if (e.service === '館藏查詢') {
          this.ThulibrarySearch++;
        } else if (e.service === '空間預約') {
          this.ThuspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.ThulocationInquiry++;
        }
      } else if (this.weekList[4] === `${this.today.getFullYear()}/${this.today.getMonth() + 1}/${this.today.getDate()}`) {
        if (e.service === '導覽') {
          this.Friguide++;
        } else if (e.service === '館藏查詢') {
          this.FrilibrarySearch++;
        } else if (e.service === '空間預約') {
          this.FrispaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.FrilocationInquiry++;
        }
      } else if (this.weekList[5] === `${this.today.getFullYear()}/${this.today.getMonth() + 1}/${this.today.getDate()}`) {
        if (e.service === '導覽') {
          this.Satguide++;
        } else if (e.service === '館藏查詢') {
          this.SatlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.SatspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.SatlocationInquiry++;
        }
      } else if (this.weekList[6] === `${this.previousday.getFullYear()}/${this.today.getMonth() + 1}/${this.today.getDate()}`) {
        if (e.service === '導覽') {
          this.Sunguide++;
        } else if (e.service === '館藏查詢') {
          this.SunlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.SunspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.SunlocationInquiry++;
        }
      }
    });
    this.today = new Date();
  }


  getWeekDate() {
    const day = this.today.getDay() || 7;
    const oneDayLong = 24 * 60 * 60 * 1000;

    const mondayTime = this.todayTime - (day - 1) * oneDayLong;
    const sundayTime = this.todayTime + (7 - day) * oneDayLong;

    this.monday = new Date(mondayTime);
    this.tuesday = new Date(mondayTime + oneDayLong * 1);
    this.wednesday = new Date(mondayTime + oneDayLong * 2);
    this.thursday = new Date(mondayTime + oneDayLong * 3);
    this.friday = new Date(mondayTime + oneDayLong * 4);
    this.saturday = new Date(mondayTime + oneDayLong * 5);
    this.sunday = new Date(sundayTime);

    this.week = [this.monday, this.tuesday, this.wednesday, this.thursday, this.friday, this.saturday, this.sunday];

    from(this.week)
      .subscribe(w => {
        this.weekday.push(`${w.getFullYear()}/${w.getMonth() + 1}/${w.getDate()}`);
      });

    zip(from(this.weekday))
      .subscribe(([x]) => {
        this.weekList.push(`${x}`);
      });
  }

  changeWeekListPrevious() {
    this.Monguide = 0;
    this.MonlibrarySearch = 0;
    this.MonspaceReservation = 0;
    this.MonlocationInquiry = 0;

    this.Tueguide = 0;
    this.TuelibrarySearch = 0;
    this.TuespaceReservation = 0;
    this.TuelocationInquiry = 0;

    this.Wedguide = 0;
    this.WedlibrarySearch = 0;
    this.WedspaceReservation = 0;
    this.WedlocationInquiry = 0;

    this.Thuguide = 0;
    this.ThulibrarySearch = 0;
    this.ThuspaceReservation = 0;
    this.ThulocationInquiry = 0;

    this.Friguide = 0;
    this.FrilibrarySearch = 0;
    this.FrispaceReservation = 0;
    this.FrilocationInquiry = 0;

    this.Satguide = 0;
    this.SatlibrarySearch = 0;
    this.SatspaceReservation = 0;
    this.SatlocationInquiry = 0;

    this.Sunguide = 0;
    this.SunlibrarySearch = 0;
    this.SunspaceReservation = 0;
    this.SunlocationInquiry = 0;

    this.today.setDate(this.today.getDate() - 7);
    this.timestamp = moment(this.today).unix();
    this.previousday.setTime(this.timestamp * 1000);
    this.weekList.length = 0;
    this.weekday.length = 0;
    const day = this.previousday.getDay();
    const oneDayLong = 24 * 60 * 60 * 1000;

    const mondayTime = this.previousday.getTime() - (day - 1) * oneDayLong;
    const sundayTime = this.previousday.getTime() + (7 - day) * oneDayLong;

    this.monday = new Date(mondayTime);
    this.tuesday = new Date(mondayTime + oneDayLong * 1);
    this.wednesday = new Date(mondayTime + oneDayLong * 2);
    this.thursday = new Date(mondayTime + oneDayLong * 3);
    this.friday = new Date(mondayTime + oneDayLong * 4);
    this.saturday = new Date(mondayTime + oneDayLong * 5);
    this.sunday = new Date(sundayTime);

    this.week = [this.monday, this.tuesday, this.wednesday, this.thursday, this.friday, this.saturday, this.sunday];

    from(this.week)
      .subscribe(w => {
        this.weekday.push(`${w.getFullYear()}/${w.getMonth() + 1}/${w.getDate()}`);
      });

    zip(from(this.weekday))
      .subscribe(([x]) => {
        this.weekList.push(`${x}`);
      });

    from(this.activitydata).subscribe(e => {
      this.previousday = new Date(e.time);
      if (this.weekList[0] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Monguide++;
        } else if (e.service === '館藏查詢') {
          this.MonlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.MonspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.MonlocationInquiry++;
        }
      // tslint:disable-next-line: max-line-length
      } else if (this.weekList[1] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Tueguide++;
        } else if (e.service === '館藏查詢') {
          this.TuelibrarySearch++;
        } else if (e.service === '空間預約') {
          this.TuespaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.TuelocationInquiry++;
        }
      // tslint:disable-next-line: max-line-length
      } else if (this.weekList[2] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Wedguide++;
        } else if (e.service === '館藏查詢') {
          this.WedlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.WedspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.WedlocationInquiry++;
        }
      // tslint:disable-next-line: max-line-length
      } else if (this.weekList[3] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Thuguide++;
        } else if (e.service === '館藏查詢') {
          this.ThulibrarySearch++;
        } else if (e.service === '空間預約') {
          this.ThuspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.ThulocationInquiry++;
        }
      // tslint:disable-next-line: max-line-length
      } else if (this.weekList[4] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Friguide++;
        } else if (e.service === '館藏查詢') {
          this.FrilibrarySearch++;
        } else if (e.service === '空間預約') {
          this.FrispaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.FrilocationInquiry++;
        }
      // tslint:disable-next-line: max-line-length
      } else if (this.weekList[5] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Satguide++;
        } else if (e.service === '館藏查詢') {
          this.SatlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.SatspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.SatlocationInquiry++;
        }
      // tslint:disable-next-line: max-line-length
      } else if (this.weekList[6] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Sunguide++;
        } else if (e.service === '館藏查詢') {
          this.SunlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.SunspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.SunlocationInquiry++;
        }
      }
    });

    const myChart = echarts.init(document.getElementById('main'));
    const option = {
      title: {
        text: '各服務項目(折線圖)'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['導覽', '館藏查詢', '空間預約', '定點諮詢']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        // tslint:disable-next-line: max-line-length
        data: [this.weekList[0] + '(一)', this.weekList[1] + '(二)', this.weekList[2] + '(三)', this.weekList[3] + '(四)', this.weekList[4] + '(五)', this.weekList[5] + '(六)', this.weekList[6] + '(日)']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '導覽',
          type: 'line',
          data: [this.Monguide, this.Tueguide, this.Wedguide, this.Thuguide, this.Friguide, this.Satguide, this.Sunguide]
        },
        {
          name: '館藏查詢',
          type: 'line',
          // tslint:disable-next-line: max-line-length
          data: [this.MonlibrarySearch, this.TuelibrarySearch, this.WedlibrarySearch, this.ThulibrarySearch, this.FrilibrarySearch, this.SatlibrarySearch, this.SunlibrarySearch]
        },
        {
          name: '空間預約',
          type: 'line',
          // tslint:disable-next-line: max-line-length
          data: [this.MonspaceReservation, this.TuespaceReservation, this.WedspaceReservation, this.ThuspaceReservation, this.FrispaceReservation, this.SatspaceReservation, this.SunspaceReservation]
        },
        {
          name: '定點諮詢',
          type: 'line',
          // tslint:disable-next-line: max-line-length
          data: [this.MonlocationInquiry, this.TuelocationInquiry, this.WedlocationInquiry, this.ThulocationInquiry, this.FrilocationInquiry, this.SatlocationInquiry, this.SunlocationInquiry]
        },
      ]
    };
    myChart.setOption(option);
  }

  changeWeekListNext() {
    this.Monguide = 0;
    this.MonlibrarySearch = 0;
    this.MonspaceReservation = 0;
    this.MonlocationInquiry = 0;

    this.Tueguide = 0;
    this.TuelibrarySearch = 0;
    this.TuespaceReservation = 0;
    this.TuelocationInquiry = 0;

    this.Wedguide = 0;
    this.WedlibrarySearch = 0;
    this.WedspaceReservation = 0;
    this.WedlocationInquiry = 0;

    this.Thuguide = 0;
    this.ThulibrarySearch = 0;
    this.ThuspaceReservation = 0;
    this.ThulocationInquiry = 0;

    this.Friguide = 0;
    this.FrilibrarySearch = 0;
    this.FrispaceReservation = 0;
    this.FrilocationInquiry = 0;

    this.Satguide = 0;
    this.SatlibrarySearch = 0;
    this.SatspaceReservation = 0;
    this.SatlocationInquiry = 0;

    this.Sunguide = 0;
    this.SunlibrarySearch = 0;
    this.SunspaceReservation = 0;
    this.SunlocationInquiry = 0;

    this.today.setDate(this.today.getDate() + 7);
    this.timestamp = moment(this.today).unix();
    this.previousday.setTime(this.timestamp * 1000);
    this.weekList.length = 0;
    this.weekday.length = 0;
    const day = this.previousday.getDay();
    const oneDayLong = 24 * 60 * 60 * 1000;

    const mondayTime = this.previousday.getTime() - (day - 1) * oneDayLong;
    const sundayTime = this.previousday.getTime() + (7 - day) * oneDayLong;

    this.monday =  new Date(mondayTime);
    this.tuesday = new Date(mondayTime + oneDayLong * 1);
    this.wednesday = new Date(mondayTime + oneDayLong * 2);
    this.thursday = new Date(mondayTime + oneDayLong * 3);
    this.friday = new Date(mondayTime + oneDayLong * 4);
    this.saturday = new Date(mondayTime + oneDayLong * 5);
    this.sunday = new Date(sundayTime);

    this.week = [this.monday, this.tuesday, this.wednesday, this.thursday, this.friday, this.saturday, this.sunday];

    from(this.week)
      .subscribe(w => {
        this.weekday.push(`${w.getFullYear()}/${w.getMonth() + 1}/${w.getDate()}`);
      });

    zip(from(this.weekday))
      .subscribe(([x]) => {
        this.weekList.push(`${x}`);
      });

    from(this.activitydata).subscribe(e => {
      console.log(this.weekList);
      this.previousday = new Date(e.time);
      if (this.weekList[0] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Monguide++;
        } else if (e.service === '館藏查詢') {
          this.MonlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.MonspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.MonlocationInquiry++;
        }
      // tslint:disable-next-line: max-line-length
      } else if (this.weekList[1] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Tueguide++;
        } else if (e.service === '館藏查詢') {
          this.TuelibrarySearch++;
        } else if (e.service === '空間預約') {
          this.TuespaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.TuelocationInquiry++;
        }
      // tslint:disable-next-line: max-line-length
      } else if (this.weekList[2] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Wedguide++;
        } else if (e.service === '館藏查詢') {
          this.WedlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.WedspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.WedlocationInquiry++;
        }
        // tslint:disable-next-line: max-line-length
      } else if (this.weekList[3] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Thuguide++;
        } else if (e.service === '館藏查詢') {
          this.ThulibrarySearch++;
        } else if (e.service === '空間預約') {
          this.ThuspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.ThulocationInquiry++;
        }
        // tslint:disable-next-line: max-line-length
      } else if (this.weekList[4] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Friguide++;
        } else if (e.service === '館藏查詢') {
          this.FrilibrarySearch++;
        } else if (e.service === '空間預約') {
          this.FrispaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.FrilocationInquiry++;
        }
        // tslint:disable-next-line: max-line-length
      } else if (this.weekList[5] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Satguide++;
        } else if (e.service === '館藏查詢') {
          this.SatlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.SatspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.SatlocationInquiry++;
        }
        // tslint:disable-next-line: max-line-length
      } else if (this.weekList[6] === `${this.previousday.getFullYear()}/${this.previousday.getMonth() + 1}/${this.previousday.getDate()}`) {
        if (e.service === '導覽') {
          this.Sunguide++;
        } else if (e.service === '館藏查詢') {
          this.SunlibrarySearch++;
        } else if (e.service === '空間預約') {
          this.SunspaceReservation++;
        } else if (e.service === '定點諮詢') {
          this.SunlocationInquiry++;
        }
      }
    });
    const myChart = echarts.init(document.getElementById('main'));
    const option = {
      title: {
        text: '各服務項目(折線圖)'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['導覽', '館藏查詢', '空間預約', '定點諮詢']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        // tslint:disable-next-line: max-line-length
        data: [this.weekList[0] + '(一)', this.weekList[1] + '(二)', this.weekList[2] + '(三)', this.weekList[3] + '(四)', this.weekList[4] + '(五)', this.weekList[5] + '(六)', this.weekList[6] + '(日)']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '導覽',
          type: 'line',
          data: [this.Monguide, this.Tueguide, this.Wedguide, this.Thuguide, this.Friguide, this.Satguide, this.Sunguide]
        },
        {
          name: '館藏查詢',
          type: 'line',
          // tslint:disable-next-line: max-line-length
          data: [this.MonlibrarySearch, this.TuelibrarySearch, this.WedlibrarySearch, this.ThulibrarySearch, this.FrilibrarySearch, this.SatlibrarySearch, this.SunlibrarySearch]
        },
        {
          name: '空間預約',
          type: 'line',
          // tslint:disable-next-line: max-line-length
          data: [this.MonspaceReservation, this.TuespaceReservation, this.WedspaceReservation, this.ThuspaceReservation, this.FrispaceReservation, this.SatspaceReservation, this.SunspaceReservation]
        },
        {
          name: '定點諮詢',
          type: 'line',
          // tslint:disable-next-line: max-line-length
          data: [this.MonlocationInquiry, this.TuelocationInquiry, this.WedlocationInquiry, this.ThulocationInquiry, this.FrilocationInquiry, this.SatlocationInquiry, this.SunlocationInquiry]
        },
      ]
    };
    myChart.setOption(option);
    console.log(this.weekList)
  }
}

export interface Activity {
  id: number;
  service: string;
  time: number;
}
