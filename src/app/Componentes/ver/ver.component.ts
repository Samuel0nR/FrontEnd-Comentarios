import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentarios } from 'src/app/interfaces/interface';

import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {
  id: number;
  comentario: any | undefined;


  constructor(private aRoute: ActivatedRoute, private _servicioService: ServiciosService) {
    this.aRoute.snapshot.paramMap.get('id')
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getComentario();
  }

  getComentario(){
  this._servicioService.getComentario(this.id).subscribe(data=>{
    this.comentario = data;
  })
  }


}
