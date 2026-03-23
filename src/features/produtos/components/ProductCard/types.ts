import type { Product } from "../shared/types"

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
  product: Product
  gridProps?: React.HTMLAttributes<HTMLDivElement>['className']
  containerClassName?: React.HTMLAttributes<HTMLDivElement>['className']
}
