// Axios functions that define the produtos API contract.
import axios from 'axios'

import type { CreateProdutoDTO, Produto } from '../types'

const produtosHttp = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export async function getProdutos(): Promise<Produto[]> {
  const { data } = await produtosHttp.get<Produto[]>('/produtos')
  return data
}

export async function getProdutoById(id: string): Promise<Produto> {
  const { data } = await produtosHttp.get<Produto>(`/produtos/${id}`)
  return data
}

export async function createProduto(payload: CreateProdutoDTO): Promise<Produto> {
  const { data } = await produtosHttp.post<Produto>('/produtos', payload)
  return data
}

export async function updateProduto(
  id: string,
  payload: Partial<CreateProdutoDTO>
): Promise<Produto> {
  const { data } = await produtosHttp.patch<Produto>(`/produtos/${id}`, payload)
  return data
}

export async function deleteProduto(id: string): Promise<void> {
  await produtosHttp.delete(`/produtos/${id}`)
}
