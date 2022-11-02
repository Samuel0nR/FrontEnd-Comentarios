import { Component, OnInit } from '@angular/core';

import { Comentarios } from 'src/app/interfaces/interface';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentarios[] = [];

  constructor(private _comentarioService: ServiciosService) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios(){
    this._comentarioService.getListComentarios().subscribe(data => (
      console.log(data),
      this.listComentarios = data
    ), error =>(
      console.log(error)
    )
    );
  }

  eliminarComentario(id: any){
    console.log(id);
    this._comentarioService.deleteComentario(id).subscribe(data =>{
      this.getComentarios();
    },error =>{
      console.log(error);
    })
  }





}
