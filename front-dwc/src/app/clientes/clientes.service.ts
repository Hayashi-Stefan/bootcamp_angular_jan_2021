import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';
import { CidadesService } from '../shared/servicos/cidades.service';
import { EstadosService } from '../shared/servicos/estados.service';
import { Cliente, Clientes, ClientesAPI } from './models/clientes';

const URL = 'http://localhost:3000/clientes'
@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(
    private http: HttpClient,
    private cidadesService: CidadesService,
    private estadosService: EstadosService
  ) {}

  getClientes(): Observable<Clientes> {
    return this.http
      .get<ClientesAPI>(URL)
//      .pipe(map((api) => api.items));
      .pipe(pluck('items'));  //extrair só um atributo
  }

  getCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${URL}/${id}`)
  }

  getClienteEnderecoCompleto(id: string): Observable<Cliente> {
    return this.getCliente(id).pipe(
      switchMap(
        (cliente) => forkJoin({
          cliente: of(cliente),
          cidade: this.cidadesService.getCidade(cliente.cidade),
          estado: this.estadosService.getEstado(cliente.estado)
        })
      ),
      map((retornoFork) => {
        return {
          ...retornoFork.cliente,
          cidade: retornoFork.cidade.nome,
          estado: retornoFork.estado.nome
        }
      })
    )
  }

  deleteCliente(id: string): Observable<Cliente> {
    return this.http.delete<Cliente>(`${URL}/${id}`)
  }

  editaCliente(id: string, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${URL}/${id}`, cliente)
  }

  incluirCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${URL}`, cliente)
  }
}
