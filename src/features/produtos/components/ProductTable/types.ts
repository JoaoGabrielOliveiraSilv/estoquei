import type { Product } from '../shared/types'

export interface IProductTableProps extends React.HTMLAttributes<HTMLDivElement> {
  products: Product[]
  onDeleteProduct?: (product: Product) => void
}
