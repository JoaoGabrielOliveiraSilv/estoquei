import type { PropsWithChildren } from 'react'
import { cn } from '@/shared/utils/cn'
import type { IStatusDotInfoProps } from './types'

export function DotInfo({
  dotColor,
  spanClassName,
  children,
  containerClassName,
}: PropsWithChildren<IStatusDotInfoProps>) {
  return (
    <div className={cn('flex items-center gap-1', containerClassName)}>
      <div className={cn('w-2 h-2 rounded-full', dotColor)} />
      <span className={cn('text-xs', spanClassName)}>{children}</span>
    </div>
  )
}
