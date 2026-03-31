import { useNewInventoryMovementModalStore } from '../store/new-inventory-movement-modal.store'

export function useNewInventoryMovementModal() {
  const isNewInventoryMovementModalOpen = useNewInventoryMovementModalStore((s) => s.isOpen)
  const productToMove = useNewInventoryMovementModalStore((s) => s.productToMove)
  const openNewInventoryMovementModal = useNewInventoryMovementModalStore((s) => s.open)
  const closeNewInventoryMovementModal = useNewInventoryMovementModalStore((s) => s.close)

  return {
    isNewInventoryMovementModalOpen,
    openNewInventoryMovementModal,
    closeNewInventoryMovementModal,
    productToMove,
  }
}
