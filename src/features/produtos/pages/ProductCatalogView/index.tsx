import { Button } from '@/shared/components/ui/Button'
import Modal from '@/shared/components/ui/Modal'

import ProductStats from '../../components/ProductStats'
import ProductTable from '../../components/ProductTable'

import type { IProductCatalogViewProps } from './types'

export default function ProductCatalogView({
  products,
  productStats,
  productPendingDelete,
  onRequestDeleteProduct,
  onNewMovement,
  onOpenMovementHistory,
  onCloseDeleteModal,
  onConfirmDelete,
  ...sectionProps
}: IProductCatalogViewProps) {
  return (
    <section className="p-4 bg-estoquei-bg w-full min-h-screen mb-20" {...sectionProps}>
      <ProductStats
        total={productStats.total}
        lowStock={productStats.lowStock}
        outOfStockQuantity={productStats.outOfStockQuantity}
      />
      <ProductTable
        products={products}
        onRequestDeleteProduct={onRequestDeleteProduct}
        onNewMovement={onNewMovement}
        onOpenMovementHistory={onOpenMovementHistory}
        className="mt-4"
      />

      <Modal
        open={productPendingDelete !== null}
        title="Excluir produto?"
        onClose={onCloseDeleteModal}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={onCloseDeleteModal}>
              Cancelar
            </Button>
            <Button
              variant="ghost"
              className="border-estoquei-danger/50 text-estoquei-danger hover:bg-estoquei-danger/10"
              onClick={onConfirmDelete}
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
