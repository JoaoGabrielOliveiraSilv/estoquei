export interface IModalProps {
  open: boolean
  title?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  onClose?: () => void
}
