import type { Product } from '@/features/produtos/components/shared/types'

export interface INewMovementsModalProps {
  product: Product
  open: boolean
  onClose: () => void
  onSubmit: () => void
}
