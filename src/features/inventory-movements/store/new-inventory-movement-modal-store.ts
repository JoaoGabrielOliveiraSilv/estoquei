import { create } from 'zustand'

import type { Product } from '@/features/produtos/components/shared/types'

interface NewInventoryMovementModalState {
  isOpen: boolean
  productToMove: Product | undefined
  open: (product: Product) => void
  close: () => void
}

export const useNewInventoryMovementModalStore = create<NewInventoryMovementModalState>((set) => ({
  isOpen: false,
  productToMove: undefined,
  open: (product) => set({ isOpen: true, productToMove: product }),
  close: () => set({ isOpen: false, productToMove: undefined }),
}))
