import { ArrowDown, ArrowUp } from 'lucide-react'
import { useCallback } from 'react'

import Modal from '@/shared/components/ui/Modal'
import { cn } from '@/shared/utils/cn'

import { useHistoryMovementModal } from '../../hooks/history-movement-modal.hooks'

import type { IHistoryMovementsModalProps } from './types'


export default function HistoryMovementsModal({ onClose }: IHistoryMovementsModalProps) {
  const { isHistoryMovementModalOpen, product, movements, closeHistoryMovementModal } =
    useHistoryMovementModal()

  const handleClose = useCallback(() => {
    closeHistoryMovementModal()
    onClose?.()
  }, [closeHistoryMovementModal, onClose])

  return (
    <Modal
      open={isHistoryMovementModalOpen}
      onClose={handleClose}
      title={`Histórico - ${product.name}`}
    >
      {movements.map((movement) => {
        const isInbound = movement.type === 'inbound'
        return (
          <div
            key={movement.id}
            className={cn(
              'flex py-3 gap-4 items-center w-full',
              'border-b border-estoquei-border last:border-b-0 last:pb-0 first:pt-0'
            )}
          >
            <span
              className={cn(
                isInbound
                  ? 'bg-estoquei-green/10 border border-estoquei-green/35 text-estoquei-green'
                  : 'bg-estoquei-danger/10 border border-estoquei-danger/35 text-estoquei-danger',
                'w-[30px] h-[30px] flex items-center justify-center rounded-md'
              )}
            >
              {isInbound ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            </span>
            <div className="flex flex-col">
              <span className="text-estoquei-text font-medium text-[13px]">
                {movement.counterPartyName}
              </span>
              <span className="text-estoquei-text3 text-[12px]">{movement.date}</span>
            </div>
            <div
              className={cn(
                isInbound ? 'text-estoquei-green' : 'text-estoquei-danger',
                'text-estoquei-text text-sm',
                'ml-auto shrink-0 pr-2'
              )}
            >
              <span className={cn(isInbound ? 'text-estoquei-green' : 'text-estoquei-danger')}>
                {isInbound ? '+' : '-'}
                {movement.quantity}
              </span>
            </div>
          </div>
        )
      })}
    </Modal>
  )
}
