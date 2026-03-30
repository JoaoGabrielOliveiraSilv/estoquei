import type { Product } from '@/shared/types/product'

export interface IProductModalProps {
  open: boolean
  product?: Product
  onClose: () => void
}
