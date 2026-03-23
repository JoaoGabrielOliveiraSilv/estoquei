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
        <div
          key={item.label}
          className={cn(
            'flex items-center justify-center lg:items-start lg:justify-start',
            'p-3 hover:bg-estoquei-bg3 rounded-md',
            className
          )}
        >
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'w-full h-full border-none lg:justify-start',
              'focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0',
              'bg-transparent hover:bg-transparent active:bg-transparent rounded-[5px]',
              className
            )}
            onClick={item.onClick}
          >
            <item.icon size={16} className="text-estoquei-text3" />
            <span className="text-estoquei-text3 text-xs hidden lg:block">{item.label}</span>
          </Button>
        </div>
      ))}
    </div>
  )
}
