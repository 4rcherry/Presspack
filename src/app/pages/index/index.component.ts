import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['May 19', 'Jun 19', 'Jul 19', 'Aug 19', 'Sep 19', 'Oct 19', 'Nov 19', 'Dec 19', 'Jan 20', 'Feb 20', 'Mart 20', 'Apr 20'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [1000, 1000, 500,  1000, 600,  1000, 600,  1000, 1000, 1400, 2500, 3000], label: 'Material In'},
    {data: [800,  900,  700,  800,  900,  700,  800,  900,  1000, 1500, 2000, 3600], label: 'Sales Out'},
    {data: [200,  300,  100,  300,  0,    300,  100,  200,  200,  100,  600,  0], label: 'Balance'},
    {data: [800,  900,  700,  800,  900,  700,  800,  900,  1000, 1500, 2000, 4000], label: 'Demand'},
    {data: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 2000, 2000, 3000], label:'Production Capability'}
  ];
  ngOnInit() {
  }
}
