export type ProductCardStatus = 'normal' | 'warning' | 'danger'
export type ProductCardStyle = Record<ProductCardStatus, {
  status: {
    border: string
    bg: string
    textColor: string
    dot: string
    text: string
  }
  quantity: {
    textColor: string
  }
}>
export interface IProductCardProps {
  icon: React.ReactNode
  title: string
  description: string
  quantity: number
  status: ProductCardStatus
}
