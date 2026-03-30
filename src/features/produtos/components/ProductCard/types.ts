import type { Product, ProductCardStatus } from "../shared/types"

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
  onSubmitNewMovementClick?: (product: Product) => void
}
