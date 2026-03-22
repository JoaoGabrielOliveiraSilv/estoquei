import { Button } from '@/shared/components/ui/Button'
import { LayersPlus, RotateCcw, SquarePen, Trash } from 'lucide-react'
import type { IProductCardProps } from './types'
import { cn } from '@/shared/utils/cn'
import { variants } from './variants'
import { DotInfo } from '@/shared/components/ui/DotInfo'

export default function ProductCard({
  status,
  icon,
  title,
  description,
  quantity,
}: IProductCardProps) {
  const { quantity: quantityStyle, status: statusStyle } = variants[status]

  return (
    <div className="bg-estoquei-bg2 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:gap-2 md:items-center md:justify-between">
      <div className="flex items-center justify-between md:contents">
        {/* ItemInfo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-estoquei-bg3 border border-estoquei-border flex items-center justify-center">
            {icon}
          </div>
          <div className="flex flex-col">
            <h3 className="text-estoquei-text font-bold">{title}</h3>
            <p className="text-estoquei-text2 text-sm">{description}</p>
          </div>
        </div>

        {/* Status */}
        <DotInfo
          dotColor={statusStyle.dot}
          spanClassName={cn(statusStyle.textColor, 'text-xs')}
          containerClassName={cn(
            statusStyle.bg,
            statusStyle.border,
            'flex items-center self-center gap-1 h-fit px-2 py-[3px] rounded-full border'
          )}
        >
          {statusStyle.text}
        </DotInfo>
      </div>

      <div className="flex items-center justify-between md:contents">
        {/* Quantity */}
        <div className="flex items-center gap-2">
          <span
            className={cn(quantityStyle.textColor, 'text-xl md:text-sm')}
          >{`${quantity} un.`}</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
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
    </div>
  )
}
