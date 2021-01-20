import { Component } from '@angular/core';
import { Alunos } from './alunos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula-angular';
  nome = 'Ken'

  alunos: Alunos = [
    {
      nome: 'Stefan',
      dataNascimento: '1996-08-05'
    },
    {
      nome: 'Konrad',
      dataNascimento: '2001-01-19'
    }
  ]

  alertaTurma(turma: string) {
    alert(`Turma ${turma} selecionada`)
  }
}
