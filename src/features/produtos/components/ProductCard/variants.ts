import type { ProductCardStyle } from './types'

export const variants: ProductCardStyle = {
  normal: {
    status: {
      border: 'border-estoquei-green/10',
      bg: 'bg-estoquei-green/10',
      textColor: 'text-estoquei-green',
      dot: 'bg-estoquei-green',
      text: 'Normal',
    },
    quantity: {
      textColor: 'text-estoquei-green',
    },
  },
  warning: {
    status: {
      border: 'border-estoquei-warning/10',
      bg: 'bg-estoquei-warning/10',
      textColor: 'text-estoquei-warning',
      dot: 'bg-estoquei-warning',
      text: 'Baixo',
    },
    quantity: {
      textColor: 'text-estoquei-warning',
    },
  },
  danger: {
    status: {
      border: 'border-estoquei-danger/10',
      bg: 'bg-estoquei-danger/10',
      textColor: 'text-estoquei-danger',
      dot: 'bg-estoquei-danger',
      text: 'Zerado',
    },
    quantity: {
      textColor: 'text-estoquei-danger',
    },
  },
} as const
