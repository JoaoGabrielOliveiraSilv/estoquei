import { create } from "zustand";

import type { InventoryMovement } from "@/shared/types/inventory-moment";
import type { Product } from "@/shared/types/product";

interface IHistoryMovementModalState {
  isOpen: boolean
  product: Product
  movements: InventoryMovement[]
  open: (product: Product, movements: InventoryMovement[]) => void
  close: () => void
}

export const useHistoryMovementModalStore = create<IHistoryMovementModalState>((set) => ({
  isOpen: false,
  product: {
    id: '',
    emoji: 'beer',
    icon: null,
    name: '',
    description: '',
    quantity: 0,
    status: 'normal' as const,
  } satisfies Product,
  movements: [],
  open: (product, movements) => set({ isOpen: true, product, movements }),
  close: () => set({ isOpen: false, movements: [] }),
}))