import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent  {

  public labels1:string[] = ['VENTAS','CONSUMO','DESCONOCIDO']
  public data1=[
    [350,450,100]
  ]


}
