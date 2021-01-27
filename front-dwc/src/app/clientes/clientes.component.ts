import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  PoBreadcrumb,
  PoPageAction,
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import { Observable, Subscription } from 'rxjs';
import { ClientesService } from './clientes.service';
import { Cliente, Clientes } from './models/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit, OnDestroy {
//  private subscriptions = new Subscription();

  actions: Array<PoPageAction> = [
    { label: 'Incluir', url: 'home/clientes/new' }
  ];

  breadCrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/home' },
      { label: 'Cliente' }
    ],
  };

//  items: any - Antigo items
  items$: Observable<Clientes>;   // Novo items

  colunas: Array<PoTableColumn> = [
    { property: 'id', label: 'ID', type: 'string' },
    { property: 'nome', label: 'Nome', type: 'string' },
    { property: 'endereco', label: 'Endereço', type: 'string' },
    { property: 'dataNascimento', label: 'Data Nascimento', type: 'date' },
  ];

  tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', action: this.visualizar.bind(this) },
    { label: 'Editar', action: this.editar.bind(this) }
  ];

  constructor(
    private clienteService: ClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /*
    this.subscriptions.add(
      this.clienteService.getClientes().subscribe((items) => {
        this.items = items;
      })
    );
    */

    this.items$ = this.clienteService.getClientes()
  }

  ngOnDestroy(): void {
//    this.subscriptions.unsubscribe();
  }

  visualizar(cliente: Cliente) {
    this.router.navigate(['home/clientes/view', cliente.id])
  }

  editar(cliente: Cliente) {
    this.router.navigate(['home/clientes/edit', cliente.id])
  }
}
