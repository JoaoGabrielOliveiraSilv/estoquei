export interface IBottomNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    label: string
    icon: React.ComponentType<{ className?: string }>
    href?: string
    onClick?: () => void
    active?: boolean
  }[]
}