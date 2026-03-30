import type { ReactNode } from 'react'

export type ProductCardStatus = 'normal' | 'warning' | 'danger'

export type Product = {
  id: string
  icon: ReactNode
  name: string
  description: string
  quantity: number
  status: ProductCardStatus
}
