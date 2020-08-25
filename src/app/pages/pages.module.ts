import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress/progress.component';
import { GraficaComponent } from './grafica1/grafica/grafica.component';
import { PagesComponent } from './pages.component';

import { ShareModule } from '../shared/share.module'
import { RouterModule } from '@angular/router'
import { AuhtModule } from '../auth/auht.module';


@NgModule({
  declarations: [
    DashboardComponent, 
    ProgressComponent,
    GraficaComponent,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraficaComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule,
    AuhtModule
  ]
})
export class PagesModule { }
