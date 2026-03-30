import type { Product } from '../shared/types'

export interface IProductTableProps extends React.HTMLAttributes<HTMLDivElement> {
  products: Product[]
  onSubmitNewMovementClick?: (product: Product) => void
}
