import { create } from 'zustand'

import type { Product } from '@/shared/types/product'

interface IProductModalState {
  isOpen: boolean
  product?: Product
  open: (product?: Product) => void
  close: () => void
}

export const useProductModalStore = create<IProductModalState>((set) => ({
  isOpen: false,
  product: undefined,
  open: (product) => set({ isOpen: true, product }),
  close: () => set({ isOpen: false, product: undefined }),
}))
