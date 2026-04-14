import { cn } from '@/shared/utils/cn'

import type { IStatusDotInfoProps } from './types'
import type { PropsWithChildren } from 'react'

export function DotInfo({
  dotColor,
  spanClassName,
  children,
  containerClassName,
}: PropsWithChildren<IStatusDotInfoProps>) {
  return (
    <div className={cn('flex items-center gap-1 w-fit h-fit', containerClassName)}>
      <div className={cn('w-2 h-2 rounded-full', dotColor)} aria-hidden="true" />
      <span className={cn('text-xs', spanClassName)}>{children}</span>
    </div>
  )
}
