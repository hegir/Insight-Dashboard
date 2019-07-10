import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];

const SAMPLE_BARCHART_LABLES: string[] = ['W1','W2','W3','W4','W5','W6','W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLables: string[] = SAMPLE_BARCHART_LABLES;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines:false,
    responsive:true
  }

  ngOnInit() {
  }

}
