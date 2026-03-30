import { create } from 'zustand'

import type { Product } from '@/shared/types/product'

interface NewInventoryMovementModalState {
  isOpen: boolean
  productToMove: Product
  open: (product: Product) => void
  close: () => void
}

const initialProduct: Product = {
  id: '',
  icon: null,
  name: '',
  description: '',
  quantity: 0,
  status: 'normal' as const,
}

export const useNewInventoryMovementModalStore = create<NewInventoryMovementModalState>((set) => ({
  isOpen: false,
  productToMove: initialProduct,
  open: (product) => set({ isOpen: true, productToMove: product }),
  close: () => set({ isOpen: false, productToMove: initialProduct }),
}))
