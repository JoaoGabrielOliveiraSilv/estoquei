export type ProductCardStatus = 'normal' | 'warning' | 'danger'
type StatusStyle = {
  border: string
  bg: string
  textColor: string
  dot: string
  text: string
}

type QuantityStyle = {
  textColor: string
}

export type ProductCardStyle = Record<ProductCardStatus, {
  status: StatusStyle
  quantity: QuantityStyle
}>
export interface IProductCardProps {
  icon: React.ReactNode
  title: string
  description: string
  quantity: number
  status: ProductCardStatus
}
