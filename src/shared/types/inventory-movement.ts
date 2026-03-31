export type InventoryMovementType = 'inbound' | 'outbound'

export interface InventoryMovement {
  id: number
  type: InventoryMovementType
  quantity: number
  counterPartyName: string
  date: string
}
