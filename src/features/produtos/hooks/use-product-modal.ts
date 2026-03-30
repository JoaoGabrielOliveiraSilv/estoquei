import { useProductModalStore } from '../store/product-modal.store'

export function useProductModal() {
  const isOpen = useProductModalStore((state) => state.isOpen)
  const product = useProductModalStore((state) => state.product)
  const open = useProductModalStore((state) => state.open)
  const close = useProductModalStore((state) => state.close)

  return { isOpen, product, open, close }
}
