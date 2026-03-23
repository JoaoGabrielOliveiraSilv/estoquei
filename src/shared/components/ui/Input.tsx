// Reusable input primitive shared across features.
import { cn } from '@/shared/utils/cn'
import type { InputHTMLAttributes } from 'react'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        'w-full py-2 pl-9 pr-3',
        'bg-estoquei-bg2',
        'border border-estoquei-border rounded-md',
        'text-estoquei-text text-[13px] outline-none',
        'focus:border-estoquei-border2',
        props.className
      )}
    />
  )
}
