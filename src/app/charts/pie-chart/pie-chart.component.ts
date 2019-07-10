import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData:number[] = [350, 450, 120];
  pieChartLabels: string[] = ['XYZ hosting', 'nSoft', 'Authority Partners'];
  public pieChartColors = [
    {
      backgroundColor: ['#4682B4', '#FFB6C1', '#66CDAA'],
      borderColor: '#111'
    },
  ];
  pieChartType = 'pie'

  ngOnInit() {
  }

}
