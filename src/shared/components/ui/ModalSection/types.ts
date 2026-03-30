import type { HTMLAttributes, ReactNode } from 'react'

export interface IModalSectionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
}
