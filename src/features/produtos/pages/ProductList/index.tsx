import { useCallback, useState } from 'react'

import { mockProducts, mockProductStats } from '@/mock-data'
import { Button } from '@/shared/components/ui/Button'
import Modal from '@/shared/components/ui/Modal'
import type { Product } from '@/shared/types/product'

import ProductStats from '../../components/ProductStats'
import ProductTable from '../../components/ProductTable'

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>(() => [...mockProducts])
  const [productPendingDelete, setProductPendingDelete] = useState<Product | null>(null)

  const handleDeleteProduct = useCallback((product: Product) => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id))
  }, [])

  const handleRequestDeleteProduct = useCallback((product: Product) => {
    setProductPendingDelete(product)
  }, [])

  const handleCloseDeleteModal = useCallback(() => {
    setProductPendingDelete(null)
  }, [])

  const handleConfirmDelete = useCallback(() => {
    if (productPendingDelete) {
      handleDeleteProduct(productPendingDelete)
    }
    setProductPendingDelete(null)
  }, [handleDeleteProduct, productPendingDelete])

  return (
    <section className="p-4 bg-estoquei-bg w-full min-h-screen mb-20">
      <ProductStats
        total={mockProductStats.total}
        lowStock={mockProductStats.lowStock}
        outOfStockQuantity={mockProductStats.outOfStockQuantity}
      />
      <ProductTable
        products={products}
        onRequestDeleteProduct={handleRequestDeleteProduct}
        className="mt-4"
      />

      <Modal
        open={productPendingDelete !== null}
        title="Excluir produto?"
        onClose={handleCloseDeleteModal}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={handleCloseDeleteModal}>
              Cancelar
            </Button>
            <Button
              variant="ghost"
              className="border-estoquei-danger/50 text-estoquei-danger hover:bg-estoquei-danger/10"
              onClick={handleConfirmDelete}
            >
              Excluir
            </Button>
          </div>
        }
      >
        {productPendingDelete ? (
          <p className="text-estoquei-text2 text-sm">
            Tem certeza que deseja excluir{' '}
            <span className="text-estoquei-text font-medium">{productPendingDelete.name}</span>? Essa ação não pode
            ser desfeita.
          </p>
        ) : null}
      </Modal>
    </section>
  )
}
