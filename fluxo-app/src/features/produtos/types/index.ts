// Product domain types shared inside the produtos feature.
export interface Produto {
  id: string
  nome: string
  descricao: string
  imagemUrl?: string
  quantidade: number
  criadoEm: string
  atualizadoEm: string
}

export interface CreateProdutoDTO {
  nome: string
  descricao: string
  imagemUrl?: string
}
