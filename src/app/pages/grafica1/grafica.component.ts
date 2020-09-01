import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label ,Color } from 'ng2-charts';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent  {
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];

  public doughnutChartType: ChartType = 'doughnut';

  public color : Color[]=[
    {backgroundColor:['#5D4037','#D7CCC8','#FF5722']}
  ]

// segundo dona
  public labels1:string[] = ['VENTAS','CONSUMO','DESCONOCIDO']
  public data1: MultiDataSet =[
    [100,450,100]
  ]
  public  color1 :Color[]=[
    {backgroundColor:['#CFD8DC','#607D8B','#757575']}
  ]
// fin

}
