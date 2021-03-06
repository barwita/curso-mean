import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParqueComponent } from './components/parque/parque.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
