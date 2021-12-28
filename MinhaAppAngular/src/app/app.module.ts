import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteServiceService } from './cliente-service.service';
import { MeuComponenteComponent } from './components/meu-componente/meu-componente.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ClienteServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
