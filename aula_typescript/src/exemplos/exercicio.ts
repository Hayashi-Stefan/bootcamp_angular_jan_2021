/*
    Dado um retorno da api, crie fun��es para as seguintes situa��es:

    Média de preço do pedido
    Nome do produto mais barato
    filtro por código do produto
    busca de produto por nome
*/

export interface informacoesPedido {
    numeroPedido: string,
    cliente: string,
    items: Array<itemsPedido>
}

export interface itemsPedido {
    produto: string,
    descricao: string,
    preco: number
}

export function precoMedio(api:informacoesPedido) {
    let precoProduto: number = 0
    let qtdItens: number = 0

    api.items.forEach(produtos => {
        precoProduto += produtos.preco
        qtdItens++
    })
    
    return console.log(`O preço médio é ${precoProduto/qtdItens}`);
}

export function produtoMaisBarato(api:informacoesPedido) {
    let precoProduto = 0
    let nomeProduto: string = ""

    api.items.forEach(produtos => {
        if(produtos.preco < precoProduto) {
            nomeProduto = produtos.descricao
        } else {
            precoProduto = produtos.preco
        }
    })
    
    return console.log(`O produto mais barato é ${nomeProduto}`);
}

export function filtroPorCodigo(api: informacoesPedido, codigo: string) {
    return api.items.filter((items) => items.produto === codigo)
}

export function buscaProdutoPorNome(api: informacoesPedido, produto: string) {
    const { items } = api
    return api.items.filter((items) => items.descricao === produto)

//    return buscaItem<itemsPedido>(items, 'descricao', produto)
}

/* Exemplo - 01
function buscaItem(items: any, atributo: string, chave: string) {
    return items.find((item: any) => item[atributo] === chave)
}
*/ 
/* 
// Exemplo - 02 - Generico
function buscaItem<T>(
    items:  Array<T>,
    atributo: keyof T,
    chave: any
) {
    return items.find((item: any) => item[atributo] === chave)
}
*/ 