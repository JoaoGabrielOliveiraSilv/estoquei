import type { ReactNode } from 'react'

import type { ProductIconItem } from './product-icon'

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
