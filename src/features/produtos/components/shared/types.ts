export type ProductCardStatus = 'normal' | 'warning' | 'danger'

export type Product = {
  id: string
  icon: React.ReactNode
  name: string
  description: string
  quantity: number
  status: ProductCardStatus
}
