import { api } from './client'

import type { ApiEnvelope, ApiProduct, CreateProductBody, ListProductsData, UpdateProductBody } from './types'

function unwrap<T>(body: ApiEnvelope<T>): T {
  return body.data
}

export async function listProducts(params?: { page?: number; limit?: number }): Promise<ListProductsData> {
  const { data } = await api.get<ApiEnvelope<ListProductsData>>('/products', { params })
  return unwrap(data)
}

export async function createProduct(body: CreateProductBody): Promise<ApiProduct> {
  const { data } = await api.post<ApiEnvelope<ApiProduct>>('/products', body)
  return unwrap(data)
}

export async function updateProduct(id: string, body: UpdateProductBody): Promise<ApiProduct> {
  const { data } = await api.put<ApiEnvelope<ApiProduct>>(`/products/${id}`, body)
  return unwrap(data)
}

export async function deleteProduct(id: string): Promise<void> {
  await api.delete<ApiEnvelope<null>>(`/products/${id}`)
}
