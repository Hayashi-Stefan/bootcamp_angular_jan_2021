import { montaTurma } from "./exemplos/arrays"
import { filtraAlunoPorNota } from "./exemplos/exemplo-objetos"

//exemploTipos()
//exemploIfLoop()
//listaDeAlunos()

/*
const notas = [5,10,7]
const somaDasNotas = somaNotas(notas)
console.log('A soma é: ' + somaDasNotas);

const turma = montaTurma()
const novaTurma = filtraAlunoPorNota(turma, 8)
console.log(novaTurma)
console.log(buscaAlunoPorNota(turma, 10))
console.log(tirarPontoTurma(turma, 2))
*/

/*
const turma = [
    { 
        nome: 'Stefan',
        nota: 10
    },
    {
        nome: 'Ken',
        nota: 8
    },
    {
        nome: 'Hayashi',
        nota: 8
    }
]
*/

const turma = montaTurma()
console.log(filtraAlunoPorNota(turma, 8))