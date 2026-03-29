import { cn } from '@/shared/utils/cn'
import { X } from 'lucide-react'
import { Button } from '../Button'
import type { IModalProps } from './types'

export default function Modal({ open, title, children, footer, onClose }: IModalProps) {
  if (!open) {
    return null
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100]',
        'bg-black/75',
        'flex items-center justify-center',
        'p-4',
        'overflow-visible'
      )}
    >
      <div
        className={cn(
          'flex flex-col bg-estoquei-bg',
          'rounded-sm',
          'overflow-visible',
          'w-full max-w-md font-medium',
          'text-estoquei-text'
        )}
      >
        <div
          className={cn(
            'flex flex-1 items-center justify-between',
            'border-b border-estoquei-border',
            'w-full',
            'px-4 pt-4 pb-3'
          )}
        >
          <h2 className="text-estoquei-text text-[15px]">{title}</h2>
          <div>
            <Button
              className="w-7 h-7 rounded-sm border border-estoquei-border flex items-center justify-center bg-estoquei-bg"
              variant="ghost"
              size="icon"
              onClick={onClose}
            >
              <X size={14} />
            </Button>
          </div>
        </div>
        {children && <div className={cn('flex-2', 'p-4', 'w-full')}>{children}</div>}
        {footer && <div className={cn('flex-1', 'p-4', 'w-full', 'border-t border-estoquei-border')}>{footer}</div>}
      </div>
    </div>
  )
}
