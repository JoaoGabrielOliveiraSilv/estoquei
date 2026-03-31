import type { Product } from '../shared/types'

export interface IProductTableProps extends React.HTMLAttributes<HTMLDivElement> {
  products: Product[]
  onRequestDeleteProduct?: (product: Product) => void
  onNewMovement?: (product: Product) => void
  onOpenMovementHistory?: (product: Product) => void
}
