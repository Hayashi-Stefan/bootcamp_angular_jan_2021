import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { CidadeAPI, Cidades } from './interface/cidades';
import { Estado, EstadoAPI, Estados } from './interface/estados';

const URL = 'http://localhost:3000/estados'

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http: HttpClient) { }

  getEstado(id: string): Observable<Estado> {
    return this.http.get<Estado>(`${URL}/${id}`)
  }

  getEstados(): Observable<Estados> {
    return this.http.get<EstadoAPI>(`${URL}`).pipe(pluck('items'))
  }

  getCidadesDoEstado(idEstado: string): Observable<Cidades> {
    return this.http
      .get<CidadeAPI>(`${URL}/${idEstado}/cidades`)
      .pipe(pluck('items'))
  }
}
