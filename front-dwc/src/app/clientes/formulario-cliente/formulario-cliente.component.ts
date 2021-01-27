import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoComboOption, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EstadosService } from 'src/app/shared/servicos/estados.service';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../models/clientes';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})

export class FormularioClienteComponent implements OnInit {
  title: string
  breadCrumb: PoBreadcrumb = {
    items: [
      { label: 'Home'},
      { label: 'Cliente'}
    ]
  }

  clienteForm: FormGroup

  sexoOpt: Array<PoSelectOption> = [
    { label: 'Masculino', value: 'M'},
    { label: 'Feminino', value: 'F'},
    { label: 'Prefiro não informar', value: 'P'},
  ]

  estadoOpt: Array<PoSelectOption>
  cidadeOpt: Array<PoSelectOption>

  altera: boolean = false

  constructor(
    private clienteService: ClientesService,
    private estadoService: EstadosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private poNotification: PoNotificationService
  ) { }

  ngOnInit(): void {
    this.configuraFormulario()
    this.configuraEstado()
    this.configuraCliente()
  }

  private configuraCliente(): void {
    this.activatedRoute.params.pipe(
      switchMap((param) => {
        const { id } = param
        if (id) {
          this.altera = true
          return this.clienteService.getCliente(id)
        }

        return of({} as Cliente)
      })
    ).subscribe((cliente) => {
      if (this.altera) {
        this.title = `Editando Cliente: ${cliente.nome}`
        this.clienteForm.patchValue(cliente)
      } else {
        this.title = 'Novo Cliente'
      }
    })
  }

  private configuraFormulario(): void {
    this.clienteForm = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      sexo: [''],
      dataNascimento: [''],
      endereco: [''],
      estado: [''],
      cidade: ['']
    })
  }

  private configuraEstado(): void {
    this.estadoService
      .getEstados()
      .pipe(
        map((estados) =>
          estados.map((estado) => ({ label: estado.nome, value: estado.id }))
        )
      ).subscribe((estadoOpt) => {
        this.estadoOpt = estadoOpt
      })
  }

  public configuraCidades(idEstado: string): void {
    this.estadoService
      .getCidadesDoEstado(idEstado)
      .pipe(
        map((cidades) =>
          cidades.map((cidade) => ({ label: cidade.nome, value: cidade.id }))
        )
      ).subscribe((cidadeOpt) => {
        this.cidadeOpt = cidadeOpt
      })
  }

  save() {
    let obs$: Observable<Cliente>
    let mensagem: string
    const cliente: Cliente = { ...this.clienteForm.value }

    if (this.altera) {
      obs$ = this.clienteService.editaCliente(cliente.id, cliente)
      mensagem = `Cliente ${cliente.nome} alterado com sucesso`
    } else {
      obs$ = this.clienteService.incluirCliente(cliente)
      mensagem = `Cliente ${cliente.nome} incluido com sucesso`
    }

    obs$.subscribe((_) => {
      this.poNotification.success(mensagem)
      this.router.navigate(['/home/clientes'])
    })
  }

  cancel() {
    window.history.back()
  }
}
