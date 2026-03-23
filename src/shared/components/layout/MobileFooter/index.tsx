import { cn } from '@/shared/utils/cn'
import type { IBottomNavProps } from './types'
import { Button } from '../../ui/Button'

export default function MobileFooter({ items, className }: IBottomNavProps) {
  return (
    <footer
      className={cn(
        'fixed bottom-0 left-0 right-0 bg-estoquei-bg2',
        'h-[calc(64px+var(--safe-bottom))]',
        'pb-[var(--safe-bottom)]',
        'border-t border-estoquei-border',
        'flex justify-around items-center',
        'z-20',
        className,
        'md:hidden'
      )}
    >
      {items.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          size="icon"
          onClick={item.onClick}
          className={cn(
            'border-none',
            'w-full h-full flex-col gap-[3px] px-5 py-2',
            item.active ? 'text-estoquei-accent' : 'text-estoquei-text3'
          )}
        >
          <item.icon className="w-6 h-6" />
          <span
            className={cn(
              'text-xs',
              item.active ? 'text-estoquei-accent' : 'text-estoquei-text3'
            )}
          >
            {item.label}
          </span>
        </Button>
      ))}
    </footer>
  )
}
