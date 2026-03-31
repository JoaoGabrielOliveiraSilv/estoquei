import { create } from 'zustand'

import type { InventoryMovement } from '@/shared/types/inventory-movement'
import type { Product } from '@/shared/types/product'

interface HistoryMovementModalState {
  isOpen: boolean
  product: Product
  movements: InventoryMovement[]
  open: (product: Product, movements: InventoryMovement[]) => void
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
  movements: [],
  open: (product, movements) => set({ isOpen: true, product, movements }),
  close: () => set({ isOpen: false, movements: [], product: initialProduct }),
}))
