import { LayersPlus, RotateCcw, SquarePen, Trash } from 'lucide-react'

import { Button } from '@/shared/components/ui/Button'
import { cn } from '@/shared/utils/cn'

import type { IProductCardProps } from './types'

const quantityColors = {
  normal: 'text-estoquei-green',
  warning: 'text-estoquei-warning',
  danger: 'text-estoquei-danger',
} as const

const statusStyles = {
  normal: {
    bg: 'bg-estoquei-green/10',
    border: 'border-estoquei-green/20',
    textColor: 'text-estoquei-green',
    dot: 'bg-estoquei-green',
    text: 'Normal',
  },
  warning: {
    bg: 'bg-estoquei-warning/10',
    border: 'border-estoquei-warning/20',
    textColor: 'text-estoquei-warning',
    dot: 'bg-estoquei-warning',
    text: 'Baixo',
  },
  danger: {
    bg: 'bg-estoquei-danger/10',
    border: 'border-estoquei-danger/20',
    textColor: 'text-estoquei-danger',
    dot: 'bg-estoquei-danger',
    text: 'Zerado',
  },
} as const

export default function ProductCard(props: IProductCardProps) {
  const selectedStyle = statusStyles[props.status]

  return (
    <div className="bg-estoquei-bg2 rounded-lg p-4 flex flex-row gap-2 justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-estoquei-bg3 border border-estoquei-border flex items-center justify-center">
          {props.icon}
        </div>
        <div className="flex flex-col">
          <h3 className="text-estoquei-text font-bold">{props.title}</h3>
          <p className="text-estoquei-text2 text-sm">{props.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className={cn(quantityColors[props.status], 'text-sm')}>{`${props.quantity} un.`}</span>
      </div>

      <div
        className={cn(
          selectedStyle.bg,
          selectedStyle.border,
          'flex items-center self-center gap-1 h-fit px-2 py-[3px] rounded-full border'
        )}
      >
        <div className={cn(selectedStyle.dot, 'w-2 h-2 rounded-full')} />
        <span className={cn(selectedStyle.textColor, 'text-xs')}>{selectedStyle.text}</span>
      </div>

      <div className="flex items-center gap-2 justify-end">
        <Button variant="ghost" size="icon">
          <LayersPlus size={16} />
        </Button>
        <Button variant="ghost" size="icon">
          <RotateCcw size={16} />
        </Button>
        <Button variant="ghost" size="icon">
          <SquarePen size={16} />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash size={16} />
        </Button>
      </div>
    </div>
  )
}
