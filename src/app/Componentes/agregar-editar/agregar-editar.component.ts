import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Comentarios } from 'src/app/interfaces/interface';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.component.html',
  styleUrls: ['./agregar-editar.component.css'],
})
export class AgregarEditarComponent implements OnInit {
  agregarComentario: FormGroup;
  accion = 'Agregar';
  id = 0;
  comentario: Comentarios | undefined;

  constructor(
    private fb: FormBuilder,
    private _servicioService: ServiciosService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required],
    });
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar() {
    if (this.id !== 0) {
      this.accion = 'Editar';
      this._servicioService.getComentario(this.id).subscribe(
        (data) => {
          this.comentario = data;
          this.agregarComentario.patchValue({
            titulo: data.titulo,
            texto: data.texto,
            creador: data.creador,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  agregarEditar() {
    if(this.comentario == undefined){

      //Agregar Nuevo Comentario
      const comentario: Comentarios = {
        titulo: this.agregarComentario.get('titulo')?.value,
        creador: this.agregarComentario.get('creador')?.value,
        texto: this.agregarComentario.get('texto')?.value,
        fechaCreacion: new Date
      };
      this._servicioService.saveComentario(comentario).subscribe(
        (data) => {
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );

    } else {

      //Editar Comentario
      const comentario: Comentarios = {
        id: this.comentario.id,
        titulo: this.agregarComentario.get('titulo')?.value,
        creador: this.agregarComentario.get('creador')?.value,
        texto: this.agregarComentario.get('texto')?.value,
        fechaCreacion: this.comentario.fechaCreacion
      }

      this._servicioService.updateComentario(this.id, comentario).subscribe(data=>{
        this.router.navigate(['/'])
      }, error =>{
        console.log(error);
      })

    }

    
  }  
}
