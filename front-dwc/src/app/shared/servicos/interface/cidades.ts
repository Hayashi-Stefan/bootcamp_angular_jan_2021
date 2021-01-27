export interface CidadeAPI {
  items: Cidades;
  hasNext: boolean;
}

export type Cidades = Array<Cidade>;

export interface Cidade {
  id: string;
  estado: string;
  nome: string;
}
