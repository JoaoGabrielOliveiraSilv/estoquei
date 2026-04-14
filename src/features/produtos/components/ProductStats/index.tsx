import { DotInfo } from '@/shared/components/ui/DotInfo'

import type { IProductStatsProps } from './types'

export default function ProductStats({ total, lowStock, outOfStockQuantity }: IProductStatsProps) {
  console.log('total', lowStock)
  return (
    <div className="py-4 flex gap-[6px] justify-between">
      <div className="flex flex-col bg-estoquei-bg2 rounded-lg py-[14px] px-3 w-full border border-estoquei-border">
        <span className="text-estoquei-text2 text-[9px] tracking-[.08em]">TOTAL</span>
        <span className="text-estoquei-text text-[22px] font-semibold leading-none mb-1">{total.quantity}</span>
        <span className="text-estoquei-text2 text-xs hidden md:block">
          em {total.quantityProducts} produtos
        </span>
      </div>
      <div className="flex flex-col bg-estoquei-bg2 rounded-lg py-[14px] px-3 w-full border border-estoquei-border">
        <span className="text-estoquei-text2 text-[9px] tracking-[.08em]">BAIXO</span>
        <span className="text-estoquei-warning text-[22px] font-semibold leading-none mb-1">{lowStock.quantity}</span>
        <DotInfo dotColor="bg-estoquei-warning" spanClassName="text-estoquei-text2" containerClassName="h-full hidden md:flex">
          ≤ {lowStock.limit} un.
        </DotInfo>
      </div>
      <div className="flex flex-col bg-estoquei-bg2 rounded-lg py-[14px] px-3 w-full border border-estoquei-border">
        <span className="text-estoquei-text2 text-[9px] tracking-[.08em]">ZERADO</span>
        <span className="text-estoquei-danger text-[22px] font-semibold leading-none mb-1">{outOfStockQuantity}</span>
        <DotInfo dotColor="bg-estoquei-danger" spanClassName="text-estoquei-text2" containerClassName="h-full hidden md:flex">
          Sem estoque
        </DotInfo>
      </div>
    </div>
  )
}
