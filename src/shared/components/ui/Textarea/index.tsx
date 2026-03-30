import { cn } from '@/shared/utils/cn'

import type { ITextareaProps } from './types'

export function Textarea({ className, rows = 3, ...props }: ITextareaProps) {
  return (
    <textarea
      rows={rows}
      {...props}
      className={cn(
        'w-full px-[13px] py-[11px]',
        'bg-estoquei-bg2',
        'border border-estoquei-border rounded-md',
        'text-estoquei-text text-[13px] outline-none',
        'focus:border-estoquei-border2',
        'resize-y min-h-0',
        className
      )}
    />
  )
}
