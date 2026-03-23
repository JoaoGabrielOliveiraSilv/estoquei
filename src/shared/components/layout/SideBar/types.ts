export interface ISideBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    label: string
    icon: React.ComponentType<{ className?: string, size?: string | number }>
    onClick: () => void
    href?: string
  }[]
}