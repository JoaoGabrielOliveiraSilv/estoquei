// Batch movement domain types for the lotes feature.
export type TipoLote = 'entrada' | 'saida'

export interface Lote {
  id: string
  produtoId: string
  tipo: TipoLote
  quantidade: number
  negociante: string
  criadoEm: string
}

export interface CreateLoteDTO {
  produtoId: string
  tipo: TipoLote
  quantidade: number
  negociante: string
}
