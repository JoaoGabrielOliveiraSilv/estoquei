// Reusable input primitive shared across features.
import { cn } from '@/shared/utils/cn'

import type { IInputProps } from './types'

export function Input({
  withIcon = false,
  ...props
}: IInputProps) {
  return (
    <input
      {...props}
      className={cn(
        withIcon ? 'pl-9' : 'pl-3',
        'w-full py-2 pr-3',
        'bg-estoquei-bg2',
        'border border-estoquei-border rounded-md',
        'text-estoquei-text text-[13px] outline-none',
        'focus:border-estoquei-border2',
        props.className
      )}
    />
  )
}
