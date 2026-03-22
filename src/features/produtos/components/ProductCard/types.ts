export interface IProductCardProps {
  icon: React.ReactNode
  title: string
  description: string
  quantity: number
  status: 'normal' | 'warning' | 'danger'
}
