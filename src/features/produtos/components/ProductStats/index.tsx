import type { IProductStatsProps } from './types'
import { DotInfo } from '@/shared/components/ui/DotInfo'

export default function ProductStats({ total, lowStock }: IProductStatsProps) {
  return (
    <div className="bg-estoquei-bg2 p-4 flex gap-[6px] justify-between">
      <div className="flex flex-col bg-estoquei-bg3 rounded-lg py-[10px] px-2 w-full border border-estoquei-border">
        <span className="text-estoquei-text2 text-[9px] tracking-[.08em]">TOTAL</span>
        <span className="text-estoquei-text text-lg">{total.quantity}</span>
        <span className="text-estoquei-text2 text-xs hidden md:block">
          em {total.quantityProducts} produtos
        </span>
      </div>
      <div className="flex flex-col bg-estoquei-bg3 rounded-lg py-[10px] px-2 w-full border border-estoquei-border">
        <span className="text-estoquei-text2 text-[9px] tracking-[.08em]">BAIXO</span>
        <span className="text-estoquei-warning text-lg">{total.quantity}</span>
        <DotInfo dotColor="bg-estoquei-warning" spanClassName="text-estoquei-text2" containerClassName="h-full hidden md:flex">
          ≤ {lowStock.quantity} un.
        </DotInfo>
      </div>
      <div className="flex flex-col bg-estoquei-bg3 rounded-lg py-[10px] px-2 w-full border border-estoquei-border">
        <span className="text-estoquei-text2 text-[9px] tracking-[.08em]">ZERADO</span>
        <span className="text-estoquei-danger text-lg">{total.quantity}</span>
        <DotInfo dotColor="bg-estoquei-danger" spanClassName="text-estoquei-text2" containerClassName="h-full hidden md:flex">
          Sem estoque
        </DotInfo>
      </div>
    </div>
  )
}
