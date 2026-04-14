// Reusable button primitive shared across features.
import { cn } from '@shared/utils/cn'

import { buttonVariants } from './variants'

import type { IButtonProps } from './types'

export function Button({
  children,
  variant,
  size,
  loading = false,
  disabled,
  className,
  type = 'button',
  ...rest
}: IButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    >
      {loading ? 'Carregando...' : children}
    </button>
  )
}
