import { cn } from '@/shared/utils/cn'
import type { IBottomNavProps } from './types'
import { Button } from '../../ui/Button'

export default function MobileFooter({ items, className }: IBottomNavProps) {
  return (
    <footer
      className={cn(
        'fixed bottom-0 left-0 right-0 bg-estoquei-bg2 min-w-full',
        'h-[calc(64px+var(--safe-bottom))]',
        'pb-[var(--safe-bottom)]',
        'border-t border-estoquei-border',
        'flex justify-around items-center',
        'z-20',
        className,
        'md:hidden'
      )}
    >
      {items.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className={cn(
            'border-none',
            'w-full h-full',
            item.active ? 'text-estoquei-accent' : 'text-estoquei-text3'
          )}
        >
          <div
            key={item.href}
            className="flex flex-col items-center gap-[3px] px-5 py-2"
            onClick={item.onClick}
          >
            <item.icon
              className={cn(
                'w-6 h-6',
                item.active ? 'text-estoquei-accent' : 'text-estoquei-text3'
              )}
            />

            <span
              className={cn(
                'text-estoquei-text3 text-xs',
                item.active ? 'text-estoquei-accent' : 'text-estoquei-text3'
              )}
            >
              {item.label}
            </span>
          </div>
        </Button>
      ))}
    </footer>
  )
}
