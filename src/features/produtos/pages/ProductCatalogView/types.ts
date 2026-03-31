import type { Product } from '@/shared/types/product'

export type ProductCatalogStats = {
  total: { quantity: number; quantityProducts: number }
  lowStock: { quantity: number; limit: number }
  outOfStockQuantity: number
}

export interface IProductCatalogViewProps extends React.HTMLAttributes<HTMLElement> {
  products: Product[]
  productStats: ProductCatalogStats
  productPendingDelete: Product | null
  onRequestDeleteProduct?: (product: Product) => void
  onNewMovement?: (product: Product) => void
  onOpenMovementHistory?: (product: Product) => void
  onCloseDeleteModal: () => void
  onConfirmDelete: () => void
}
