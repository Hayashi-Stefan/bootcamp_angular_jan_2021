import { TestBed } from '@angular/core/testing';

import { ClientesService } from './clientes.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ClientesAPI } from './models/clientes';

fdescribe('ClientesService', () => {
  let service: ClientesService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ClientesService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar uma lista de clientes'), () => {
    const resultadoAPI: ClientesAPI = {
      hasNext: false,
      items: [{id: '1', nome: 'Stefan', cidade: '001', estado: '002', endereco: 'Jussara', dataNascimento: '2020-01-01', sexo: 'M'}]
    }

    const resultado = [{id: '1', nome: 'Stefan', cidade: '001', estado: '002', endereco: 'Jussara', dataNascimento: '2020-01-01', sexo: 'M'}]
    service.getClientes().subscribe((retorno) => {
      expect(retorno).toEqual(resultado)
    })

    const req = httpMock.expectOne((request) => request.method === "GET" )

    req.flush(resultadoAPI)
  }
});
