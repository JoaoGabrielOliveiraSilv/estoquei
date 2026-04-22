import type { ProductCardStatus } from '@/shared/types/product'

export type ApiProduct = {
  id: string
  name: string
  description: string | null
  emoji: string
  quantity: number
  status: ProductCardStatus
  createdAt: string
  updatedAt: string
}

export type ListProductsData = {
  items: ApiProduct[]
  total: number
  page: number
  limit: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export type ApiEnvelope<T> = {
  data: T
  message?: string
}

export type CreateProductBody = {
  name: string
  description?: string | null
  emoji: string
  quantity?: number
  status?: ProductCardStatus
}

export type UpdateProductBody = Partial<CreateProductBody>

export type ApiInventoryMovement = {
  id: number
  productId: string
  type: 'inbound' | 'outbound'
  quantity: number
  counterPartyName: string
  date: string
  createdAt: string
}

export type CreateMovementBody = {
  type: 'inbound' | 'outbound'
  quantity: number
  counterPartyName: string
  date: string
}
