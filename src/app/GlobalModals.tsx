import { ProductModal, useProductModal } from '@/features/produtos'

/**
 * Shell-level modals mounted once for the whole app (outside route outlets).
 */
export function GlobalModals() {
  const {
    close: closeProductModal,
    isOpen: isProductModalOpen,
    product: productToEdit,
  } = useProductModal()

  return (
    <ProductModal open={isProductModalOpen} product={productToEdit} onClose={closeProductModal} />
  )
}
