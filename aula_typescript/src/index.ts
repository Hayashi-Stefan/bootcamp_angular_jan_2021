import { montaTurma, mostraArray } from "./exemplos/arrays"
import { estaAprovado, filtraAlunoPorNota, imprimeTurma, mostraAluno, Turma } from "./exemplos/exemplo-objetos"
import { buscaProdutoPorNome, filtroPorCodigo, precoMedio, produtoMaisBarato } from "./exemplos/exercicio"

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

/*
const turma = montaTurma()
console.log(filtraAlunoPorNota(turma, 8))
*/
/*
mostraArray()
mostraAluno()

estaAprovado(10)
estaAprovado(0)
*/

/*
const turma: Turma = {
    professor: {
        nome: 'Stefan',
        materia: 'Artes',
//        ehLegal: () => 'É sim'
    }
}

imprimeTurma(turma)
*/

const api = {
    numeroPedido: '0001',
    cliente: 'Alvaro',
    items: [
        { produto: '0001', descricao: 'XBOX', preco: 5000 },
        { produto: '0002', descricao: 'PS5', preco: 5500 },
        { produto: '0003', descricao: 'PC', preco: 10000 },
        { produto: '0004', descricao: 'SWITCH', preco: 1000 },
        { produto: '0005', descricao: 'ATARI', preco: 500 },
    ],
};

precoMedio(api)

produtoMaisBarato(api)

const produtoFiltrado = filtroPorCodigo(api, '0001')
console.log(`O produto com o codigo: ${produtoFiltrado[0].produto}, nome: ${produtoFiltrado[0].descricao}, valor: R$${produtoFiltrado[0].preco}`);

const dadosProduto = buscaProdutoPorNome(api, 'ATARI')
console.log(`O produto ${dadosProduto[0].descricao} tem o valor de R$ ${dadosProduto[0].preco}`);
