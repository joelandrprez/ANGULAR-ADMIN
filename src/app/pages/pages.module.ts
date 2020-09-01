import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica1/grafica.component';
import { PagesComponent } from './pages.component';

import { ShareModule } from '../shared/share.module'
import { AuhtModule } from '../auth/auht.module';
import { ComponentModule } from '../components/component.module';

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
    FormsModule,
    ChartsModule,
    
    CommonModule,
    ShareModule,
    RouterModule,
    AuhtModule,
    ComponentModule
  ]
})
export class PagesModule { }
