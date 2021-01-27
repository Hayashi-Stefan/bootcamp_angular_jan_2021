export interface CidadeAPI {
  items: Cidades;
  hasNext: boolean;
}

type Cidades = Array<Cidade>;

export interface Cidade {
  id: string;
  estado: string;
  nome: string;
}
