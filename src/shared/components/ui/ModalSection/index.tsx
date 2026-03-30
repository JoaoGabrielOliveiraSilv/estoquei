import { cn } from '@/shared/utils/cn'

import type { IModalSectionProps } from './types'

export function ModalSection({ title, children, className, ...props }: IModalSectionProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)} {...props}>
      <span
        className={cn(
          'text-estoquei-text3 text-[13px] font-medium uppercase',
          'tracking-[.08em]'
        )}
      >
        {title}
      </span>
      {children}
    </div>
  )
}
