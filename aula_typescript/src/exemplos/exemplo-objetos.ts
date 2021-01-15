export function filtraAlunoPorNota(turma: Alunos, nota: number) {
    return turma.filter(item => item.nota === nota)
}
export interface Aluno {
    nome: string
    nota: number
}

export interface Professor {
    nome?: string
    materia?: string
//    ehLegal: Function
}

export interface Turma {
    professor?: Professor
    alunos?: Alunos
}

export type Alunos = Array<Aluno>

export function imprimeTurma(turma: Turma) {
    console.log(`Turma é composta por`);
    console.log('Professor:' + turma.professor?.nome);
//   console.log(turma.professor?.ehLegal());
}

export function mostraAluno() {
    const aluno1: Aluno = {
        nome: 'Stefan',
        nota: 8
    }

    //  const aluno2 = aluno1   //Referencia
    const aluno2: Aluno = { ...aluno1 }
    //  const aluno2: Aluno = { ...aluno1, nota: 10 }

    aluno2.nome = 'Ken'

    console.log(aluno2)
    console.log(aluno1)
}

export function imprimeNomeAluno(aluno: Aluno) {
    //  const nome = aluno.nome
    //  const nota = aluno.nota 

    //  const { nome, nota } = aluno
    const { nome: nomeDoAluno, nota } = aluno

//    console.log('O nome do aluno é ' + nomeDoAluno)
    console.log('O nome do aluno é ' + nomeDoAluno)
}

export function retornaAluno(nome: string, nota: number): Aluno {
    /*
    return {
        nome: nome,
        nota: nota,
    }
    */

    const teste = { nome, nota }
    const textoAprovado = (nota: any) => 7 ? 'Aluno Aprovado' : 'Aluno Reprovado'
    const lAprovado = (nota: any) => 7 || nome === 'Stefan'

    return {
        nome,
        nota,
    }
}

export function estaAprovado(nota?: number) {
    // const notaAvaliada = nota ? nota : 100
    // const notaAvaliada = nota !== null && nota !== undefined ? nota : 100
    const notaAvaliada = nota ?? 100
    const textoNota = notaAvaliada > 0 ? 'Está Aprovado' : 'Está Reprovado'

    console.log(textoNota)
}
