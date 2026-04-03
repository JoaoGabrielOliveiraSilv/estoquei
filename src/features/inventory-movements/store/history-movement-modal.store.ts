import { create } from 'zustand'

import type { Product } from '@/shared/types/product'

interface HistoryMovementModalState {
  isOpen: boolean
  product: Product
  open: (product: Product) => void
  close: () => void
}

const initialProduct: Product = {
  id: '',
  emoji: 'beer',
  icon: null,
  name: '',
  description: '',
  quantity: 0,
  status: 'normal' as const,
}

export const useHistoryMovementModalStore = create<HistoryMovementModalState>((set) => ({
  isOpen: false,
  product: initialProduct,
  open: (product) => set({ isOpen: true, product }),
  close: () => set({ isOpen: false, product: initialProduct }),
}))
