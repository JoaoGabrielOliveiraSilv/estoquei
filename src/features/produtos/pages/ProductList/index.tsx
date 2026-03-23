import ProductStats from '../../components/ProductStats'
import { mockProducts, mockProductStats } from '@/mock-data'
import ProductTable from '../../components/ProductTable'

export default function ProductListPage() {
  return (
    <main className="p-4 bg-estoquei-bg w-full min-h-screen">
      Lista de produtos
      <ProductStats
        total={mockProductStats.total}
        lowStock={mockProductStats.lowStock}
        outOfStockQuantity={mockProductStats.outOfStockQuantity}
      />
      <div className="mb-4"></div>
      <ProductTable products={mockProducts} />
    </main>
  )
}
