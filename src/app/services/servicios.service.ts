import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentarios } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private appUrl = 'https://localhost:44361/';
  private myApiUrl = 'api/comentario/'

  constructor(private http: HttpClient) { }

  getListComentarios(): Observable<any>{
    return this.http.get(this.appUrl + this.myApiUrl);
  }

  deleteComentario(id: number): Observable<any>{
    return this.http.delete(this.appUrl + this.myApiUrl + id);
  }

  getComentario(id: number): Observable<any>{
    return this.http.get(this.appUrl + this.myApiUrl + id);
  }

  saveComentario(comentario: Comentarios): Observable<any>{
    return this.http.post(this.appUrl + this.myApiUrl, comentario);
  }

  updateComentario(id: number, comentario: Comentarios): Observable<any>{
    return this.http.put(this.appUrl + this.myApiUrl + id, comentario);
  }

}
