import type { ProductCatalogStats } from '@/features/produtos/pages/ProductCatalogView/types'
import type { Product } from '@/shared/types/product'

const LOW_STOCK_DISPLAY_LIMIT = 20

export function computeProductStats(products: Product[]): ProductCatalogStats {
  const quantityProducts = products.length
  const quantity = products.reduce((sum, p) => sum + p.quantity, 0)
  return {
    total: { quantity, quantityProducts },
    lowStock: {
      quantity: products.filter((p) => p.status === 'warning').length,
      limit: LOW_STOCK_DISPLAY_LIMIT,
    },
    outOfStockQuantity: products.filter((p) => p.status === 'danger' || p.quantity === 0).length,
  }
}
