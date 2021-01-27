import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from './interface/cidades';

const URL = 'http://localhost:3000/cidades'

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  constructor(private http: HttpClient) { }

  getCidade(id: string): Observable<Cidade> {
    return this.http.get<Cidade>(`${URL}/${id}`)
  }

}
