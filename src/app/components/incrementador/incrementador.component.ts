import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') progreso :number = 50;
  @Input() btnClass : string = 'btn-primary'


  @Output() valorSalida:EventEmitter<number> = new EventEmitter();

  cambiarValor( valor :number){
    if( this.progreso+valor >= 0  && this.progreso+valor <= 100){
      this.valorSalida.emit(this.progreso+ valor);
      return this.progreso = this.progreso + valor;
  
    }
    
  }
  onChange(valor:number){ 

    if( valor >= 100){
      this.progreso = 100;
    }else if(  valor <= 0){
      this.progreso = 0;
    }
    else{
      this.progreso = valor;
    }
    this.valorSalida.emit(this.progreso);

    // this.valorSalida.emit(valor);
  }

}
