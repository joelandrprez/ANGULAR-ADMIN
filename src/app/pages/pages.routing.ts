import { Routes,RouterModule, Router } from '@angular/router'
import { NgModule } from '@angular/core'
import { DashboardComponent } from '../pages/dashboard/dashboard.component'
import { GraficaComponent } from '../pages/grafica1/grafica/grafica.component'
import { ProgressComponent } from '../pages/progress/progress/progress.component'
import { PagesComponent } from '../pages/pages.component';

const routes:Routes =[
    { path:'dashboard',
    component:PagesComponent,
    children:[
        {path:'',component:DashboardComponent },
        {path:'grafica',component:GraficaComponent },
        {path:'progress',component:ProgressComponent },
    ]  
}]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule{}