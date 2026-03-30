import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-estoquei-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        'ghost': 'bg-estoquei-bg2 text-estoquei-text2 border border-estoquei-border hover:bg-estoquei-bg3',
        'accent': 'text-estoquei-bg2 border border-estoquei-accent hover:bg-estoquei-accent2 bg-estoquei-accent',
      },
      size: {
        icon: 'w-7 h-7',
        sm:   'h-8 px-3 text-sm',
        md:   'h-10 px-4 text-sm',
        lg:   'h-12 px-6 text-base',
      },
      
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'md',
    },
  }
)
