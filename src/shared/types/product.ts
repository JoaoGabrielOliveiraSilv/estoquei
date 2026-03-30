import type { ProductIconItem } from '@/features/produtos/components/ProductModal/types'

import type { ReactNode } from 'react'

export type ProductCardStatus = 'normal' | 'warning' | 'danger'

export type Product = {
  id: string
  emoji: ProductIconItem
  icon: ReactNode
  name: string
  description: string
  quantity: number
  status: ProductCardStatus
}
