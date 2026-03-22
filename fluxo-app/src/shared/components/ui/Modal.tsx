// Reusable modal wrapper shared across features.
import type { PropsWithChildren } from 'react'

interface ModalProps extends PropsWithChildren {
  open: boolean
}

export function Modal({ open, children }: ModalProps) {
  if (!open) {
    return null
  }

  return <div>{children}</div>
}
