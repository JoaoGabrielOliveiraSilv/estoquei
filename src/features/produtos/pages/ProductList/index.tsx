import { useCallback, useState } from 'react'

import { mockProducts, mockProductStats } from '@/mock-data'
import type { Product } from '@/shared/types/product'

import ProductStats from '../../components/ProductStats'
import ProductTable from '../../components/ProductTable'

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>(() => [...mockProducts])

  const handleDeleteProduct = useCallback((product: Product) => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id))
  }, [])

  return (
    <section className="p-4 bg-estoquei-bg w-full min-h-screen mb-20">
      <ProductStats
        total={mockProductStats.total}
        lowStock={mockProductStats.lowStock}
        outOfStockQuantity={mockProductStats.outOfStockQuantity}
      />
      <ProductTable
        products={products}
        onDeleteProduct={handleDeleteProduct}
        className="mt-4"
      />
    </section>
  )
}
