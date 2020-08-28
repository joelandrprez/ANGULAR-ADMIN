import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './appRouting/app-routing.module'

import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { AuhtModule } from '../app/auth/auht.module';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuhtModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
