export interface ISideBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    label: string
    icon: React.ComponentType<{ className?: string, size?: number }>
    onClick: () => void
    href?: string
  }[]
}