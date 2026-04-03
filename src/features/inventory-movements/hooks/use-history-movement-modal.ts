import { useHistoryMovementModalStore } from '../store/history-movement-modal.store'

export function useHistoryMovementModal() {
  const isHistoryMovementModalOpen = useHistoryMovementModalStore((s) => s.isOpen)
  const product = useHistoryMovementModalStore((s) => s.product)
  const openHistoryMovementModal = useHistoryMovementModalStore((s) => s.open)
  const closeHistoryMovementModal = useHistoryMovementModalStore((s) => s.close)

  return {
    isHistoryMovementModalOpen,
    product,
    openHistoryMovementModal,
    closeHistoryMovementModal,
  }
}
