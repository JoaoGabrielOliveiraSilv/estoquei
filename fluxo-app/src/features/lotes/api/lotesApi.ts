// Axios functions that define the lotes API contract.
import axios from 'axios'
import type { CreateLoteDTO, Lote } from '../types'

const lotesHttp = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export async function getLotesByProduto(produtoId: string): Promise<Lote[]> {
  const { data } = await lotesHttp.get<Lote[]>(`/produtos/${produtoId}/lotes`)
  return data
}

export async function createLote(payload: CreateLoteDTO): Promise<Lote> {
  const { data } = await lotesHttp.post<Lote>('/lotes', payload)
  return data
}
