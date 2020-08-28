import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label,Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})

export class DonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }  
  @Input() titulo:string ='PANEL'
  @Input('label') public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('colors') public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

}
