import type { Product, ProductCardStatus } from '@/shared/types/product'

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
  gridProps: React.HTMLAttributes<HTMLDivElement>['className']
  containerClassName?: React.HTMLAttributes<HTMLDivElement>['className']
  onRequestDeleteProduct?: (product: Product) => void
  onNewMovement?: (product: Product) => void
  onOpenMovementHistory?: (product: Product) => void
}
