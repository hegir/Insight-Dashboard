import { Component, OnInit } from '@angular/core';
import { LINECHARTCOLORS } from '../../shared/chartColors';

const LINECHARTSAMPLEDATA: any[] = [
  { data: [788, 611, 322, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 345, 855, 86, 27, 374], label: 'Series B' },
  { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C' }
]

const LINECHARTLABELS: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINECHARTSAMPLEDATA;
  lineChartLabels = LINECHARTLABELS;
  lineChartLegend:true;
  lineChartOptions:any = {
    responsive:true
  };
  lineChartType = 'line';
  lineChartColors = LINECHARTCOLORS;

  ngOnInit() {

  }

}
