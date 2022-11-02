import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { AgregarEditarComponent } from './Componentes/agregar-editar/agregar-editar.component';
import { ListComentariosComponent } from './Componentes/list-comentarios/list-comentarios.component';
import { VerComponent } from './Componentes/ver/ver.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarComponent,
    ListComentariosComponent,
    VerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
