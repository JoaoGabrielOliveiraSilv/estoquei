import { cn } from '@/shared/utils/cn'
import type { ISideBarProps } from './types'
import { Package } from 'lucide-react'
import { Button } from '../../ui/Button'

export default function Sidebar({ items, className, ...props }: ISideBarProps) {
  return (
    <div
      className={cn(
        'hidden md:flex flex-col',
        'p-2',
        'w-[60px] lg:w-[210px] min-h-full bg-estoquei-bg2',
        'border-r border-estoquei-border',
        className
      )}
      {...props}
    >
      <div className="p-4 border-b border-estoquei-border flex items-center justify-center">
        <div className="w-7 h-7 bg-estoquei-accent rounded-[5px] flex items-center justify-center">
          <Package size={20} />
        </div>
      </div>

      {items.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          size="icon"
          onClick={item.onClick}
          className={cn(
            'flex items-center justify-center lg:items-start lg:justify-start',
            'p-3 hover:bg-estoquei-bg3 rounded-md',
            'focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0',
            'bg-transparent active:bg-transparent border-none w-full h-auto'
          )}
        >
          <item.icon size={16} className="text-estoquei-text3" />
          <span className="text-estoquei-text3 text-xs hidden lg:block">{item.label}</span>
        </Button>
      ))}
    </div>
  )
}
