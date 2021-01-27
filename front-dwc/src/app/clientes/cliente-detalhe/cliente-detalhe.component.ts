import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDialogService, PoNotificationService } from '@po-ui/ng-components';
import { switchMap } from 'rxjs/operators';
import { CidadesService } from 'src/app/shared/servicos/cidades.service';
import { EstadosService } from 'src/app/shared/servicos/estados.service';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../models/clientes';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {
  public cliente: Cliente
  public titulo: string

  constructor(
    private clienteService: ClientesService,
    private route: ActivatedRoute,
    private router: Router,
    private poAlert: PoDialogService,
    private poNotification: PoNotificationService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) =>
          this.clienteService.getClienteEnderecoCompleto(params.id)
        )
      ).subscribe((res) => {
        this.cliente = res
      })

    /*
    this.route.params.subscribe((params) => {
      const { id } = params
      if (id) {
        this.clienteService.getCliente(id).subscribe((res) => {
          this.cliente = res
        })
      }
    })
    */
  }

  get sexo(): string {
    const sexoOpt = {
      M: 'Masculino',
      F: 'Feminino',
      P: 'Prefiro não informar'
    }

    return sexoOpt[this.cliente?.sexo] ?? sexoOpt.P
  }

  public voltar() {
    window.history.back()
  }

  public remover() {
    this.poAlert.confirm({
      title: 'Confirmação de exclusão',
      message: `Você tem certeza que quer apagar o cliente: ${this.cliente.nome}`,
      confirm: () => {
        this.excluirCliente(this.cliente.id)
      }
    }
    )
  }

  private excluirCliente(id: string) {
    this.clienteService.deleteCliente(id).subscribe((_) => {
      this.poNotification.success('Cliente excluído');
      this.router.navigate(['home/clientes'])
    }, (err) => {
    })
  }

  public editar() {
    this.router.navigate(['home/clientes/edit', this.cliente.id])
  }

}
