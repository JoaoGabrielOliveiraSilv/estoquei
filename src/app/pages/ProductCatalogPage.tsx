import { useCallback, useState } from 'react'

import {
  HistoryMovementsModal,
  NewInventoryMovementsModal,
  useHistoryMovementModal,
  useNewInventoryMovementModal,
} from '@/features/inventory-movements'
import { ProductCatalogView } from '@/features/produtos'
import { mockInventoryMovements, mockProductStats, mockProducts } from '@/mock-data'
import type { Product } from '@/shared/types/product'

export default function ProductCatalogPage() {
  const [products, setProducts] = useState<Product[]>(() => [...mockProducts])
  const [productPendingDelete, setProductPendingDelete] = useState<Product | null>(null)

  const { isNewInventoryMovementModalOpen, openNewInventoryMovementModal } =
    useNewInventoryMovementModal()
  const { closeHistoryMovementModal, openHistoryMovementModal } = useHistoryMovementModal()

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

  const handleNewMovement = useCallback(
    (product: Product) => {
      openNewInventoryMovementModal(product)
    },
    [openNewInventoryMovementModal]
  )

  const handleOpenMovementHistory = useCallback(
    (product: Product) => {
      openHistoryMovementModal(product, mockInventoryMovements)
    },
    [openHistoryMovementModal]
  )

  return (
    <>
      <ProductCatalogView
        products={products}
        productStats={mockProductStats}
        productPendingDelete={productPendingDelete}
        onRequestDeleteProduct={handleRequestDeleteProduct}
        onNewMovement={handleNewMovement}
        onOpenMovementHistory={handleOpenMovementHistory}
        onCloseDeleteModal={handleCloseDeleteModal}
        onConfirmDelete={handleConfirmDelete}
      />
      <HistoryMovementsModal onClose={closeHistoryMovementModal} />
      <NewInventoryMovementsModal open={isNewInventoryMovementModalOpen} />
    </>
  )
}
