import type { Aluno } from "./exemplo-objetos"

const array1 = []
const alunos = ['Stefan','Ken','Hayashi', 36]

export function listaDeAlunos() {
    /*
    //For - 01
    for(let cont = 0; cont < alunos.length; cont++) {
        const element = alunos[cont]
        console.log(element)
    }

    //For - 02
    for (const element of alunos) {
        console.log(element)
    }

    //For - 03
    alunos.forEach(element => {
        console.log(element)
    });
    */

    meuForEach(alunos, mostraAluno)
}

function mostraAluno(item: any) {
    console.log(item)
}

function meuForEach(colecao: Array<any>, callback: Function) {
    for (const elemento of colecao) {
        callback(elemento)
    }
}

export function somaNotas(notas: Array<number>) {
    /*
    let soma = 0
    for (const nota of notas) {
        soma = soma + nota
    }
    return soma
    */

    return notas.reduce((soma, nota) => soma + nota, 0)
}

class AlunoClasse implements Aluno {
    constructor(public nome: string, public nota: number) {}
}

export function criaAluno() {
    const aluno = new AlunoClasse('Alvaro', 8)
}

export function montaTurma() {
    return [
        new AlunoClasse('Stefan', 10),
        new AlunoClasse('Ken', 8),
        new AlunoClasse('Hayashi', 8),
        new AlunoClasse('xSK', 10)
    ]
}

export function filtraAlunoPorNota(turma: Array<AlunoClasse>, nota: number) {
    /*
    let turmaFiltrada: any = []

    for (const aluno of turma) {
        if (aluno.nota === nota) {
            turmaFiltrada.push(aluno)
        }
    } 

    return turmaFiltrada
    */

    return turma.filter((aluno) => aluno.nota === nota)
}

export function buscaAlunoPorNota(turma: Array<AlunoClasse>, nota: number) {
    return turma.find((aluno) => aluno.nota === nota)
}

export function tirarPontoTurma(turma: Array<AlunoClasse>, pontoNegativo: number) {
    let turmaNegativa: Array<AlunoClasse> = []

    turmaNegativa = turma.map((aluno) => {
        aluno.nota -= pontoNegativo
        return aluno;
    })

    return turmaNegativa
}