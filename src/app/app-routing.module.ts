import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarEditarComponent } from './Componentes/agregar-editar/agregar-editar.component';
import { ListComentariosComponent } from './Componentes/list-comentarios/list-comentarios.component';
import { VerComponent } from './Componentes/ver/ver.component';

const routes: Routes = [
  {path: '', component: ListComentariosComponent},
  {path: 'agregar', component: AgregarEditarComponent},
  {path: 'editar/:id', component: AgregarEditarComponent},
  {path: 'ver/:id', component: VerComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
