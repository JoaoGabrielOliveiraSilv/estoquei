import type { Product } from '@/shared/types/product'

import type { ICON_ITEMS } from '.'

export interface IProductModalProps {
  open: boolean
  product?: Product
  onClose: () => void
}

export type ProductIconItem = keyof typeof ICON_ITEMS
