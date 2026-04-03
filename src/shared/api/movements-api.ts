import { api } from './client'

import type { ApiEnvelope, ApiInventoryMovement, CreateMovementBody } from './types'

function unwrap<T>(body: ApiEnvelope<T>): T {
  return body.data
}

export async function listMovements(productId: string): Promise<ApiInventoryMovement[]> {
  const { data } = await api.get<ApiEnvelope<ApiInventoryMovement[]>>(
    `/products/${productId}/movements`
  )
  return unwrap(data)
}

export async function createMovement(
  productId: string,
  body: CreateMovementBody
): Promise<ApiInventoryMovement> {
  const { data } = await api.post<ApiEnvelope<ApiInventoryMovement>>(
    `/products/${productId}/movements`,
    body
  )
  return unwrap(data)
}
