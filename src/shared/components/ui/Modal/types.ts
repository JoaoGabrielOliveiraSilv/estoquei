export interface IModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  title?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  onClose?: () => void
}
