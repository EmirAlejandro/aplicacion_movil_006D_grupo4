import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importa los módulos de formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedDataService } from './shared-data.service'; 

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule, // Agrega FormsModule
    ReactiveFormsModule, // Agrega ReactiveFormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SharedDataService, // Agrega el servicio aquí en la matriz de providers
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
