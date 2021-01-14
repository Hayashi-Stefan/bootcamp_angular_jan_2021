export function filtraAlunoPorNota(turma: Array<Aluno>, nota: number) {
    return turma.filter(item => item.nota === nota)
}

export interface Aluno {
    nome: string
    nota: number
}