import { LayersPlus, RotateCcw, SquarePen, Trash } from 'lucide-react'
import { useCallback } from 'react'

import { Button } from '@/shared/components/ui/Button'
import { DotInfo } from '@/shared/components/ui/DotInfo'
import { useNewInventoryMovementModal } from '@/shared/hooks/use-new-inventory-movement-modal'
import { cn } from '@/shared/utils/cn'

import { useProductModal } from '../ProductModal/hooks/product-modal.hooks'
import { variants } from './variants'

import type { IProductCardProps } from './types'

export default function ProductCard({ product, gridProps, containerClassName }: IProductCardProps) {
  const { openNewInventoryMovementModal } = useNewInventoryMovementModal()
  const { open: openProductModal } = useProductModal()
  const { quantity: quantityStyle, status: statusStyle } = variants[product.status]

  const handleNewMovementClick = useCallback(() => {
    openNewInventoryMovementModal(product)
  }, [product, openNewInventoryMovementModal])

  const handleEditProductClick = useCallback(() => {
    openProductModal(product)
  }, [product, openProductModal])

  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        'bg-estoquei-bg p-4',
        'border-b border-estoquei-border',
        gridProps,
        containerClassName
      )}
    >
      <div className="flex items-center justify-between md:contents">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-estoquei-bg3 border border-estoquei-border flex items-center justify-center">
            {product.icon}
          </div>
          <div className="flex flex-col">
            <h3 className="text-estoquei-text font-bold">{product.name}</h3>
            <p className="text-estoquei-text2 text-sm">{product.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={cn(quantityStyle.textColor, 'text-xl md:text-sm px-1')}
          >{`${product.quantity} un.`}</span>
        </div>
      </div>

      <div className="flex items-center justify-between md:contents">
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

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleNewMovementClick}>
            <LayersPlus size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <RotateCcw size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleEditProductClick}>
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
