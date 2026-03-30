import { Search } from 'lucide-react'

import { Input } from '@/shared/components/ui/Input/index.tsx'
import { cn } from '@/shared/utils/cn.ts'

import ProductCard from '../ProductCard/index.tsx'

import type { IProductTableProps } from './types.ts'

export default function ProductTable({ products, onSubmitNewMovementClick: onNewMovementClick, ...props }: IProductTableProps) {
  return (
    <div className="bg-estoquei-bg gap-2" {...props}>
      <div className="relative mb-3">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-estoquei-text3 pointer-events-none"
        />
        <Input placeholder="Buscar produto..." withIcon />
      </div>

      <div
        className={cn(
          'flex flex-col gap-2 md:gap-0',
          'md:border border-estoquei-border md:rounded-lg',
          'md:overflow-hidden'
        )}
      >
        <div
          className={cn(
            'hidden md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center',
            'bg-estoquei-bg2 py-2 px-3'
          )}
        >
          <span className="text-estoquei-text3 text-xs tracking-[.08em]">PRODUTOS</span>
          <span className="text-estoquei-text3 text-xs tracking-[.08em]">QUANTIDADE</span>
          <span className="text-estoquei-text3 text-xs tracking-[.08em]">STATUS</span>
          <span></span>
        </div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            gridProps={'flex flex-col gap-3 md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center'}
            containerClassName={cn(
              'border border-estoquei-border rounded-lg md:border-x-0 md:border-b-0 md:rounded-none'
            )}
            onSubmitNewMovementClick={onNewMovementClick}
          />
        ))}
      </div>
    </div>
  )
}
