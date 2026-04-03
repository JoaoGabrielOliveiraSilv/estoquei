import { useQuery } from '@tanstack/react-query'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { useCallback, useMemo } from 'react'

import { listMovements } from '@/shared/api/movements-api'
import Modal from '@/shared/components/ui/Modal'
import type { InventoryMovement } from '@/shared/types/inventory-movement'
import { cn } from '@/shared/utils/cn'

import { useHistoryMovementModal } from '../../hooks/use-history-movement-modal'

import type { IHistoryMovementsModalProps } from './types'

function toInventoryMovement(row: {
  id: number
  type: 'inbound' | 'outbound'
  quantity: number
  counterPartyName: string
  date: string
}): InventoryMovement {
  return {
    id: row.id,
    type: row.type,
    quantity: row.quantity,
    counterPartyName: row.counterPartyName,
    date: row.date,
  }
}

export default function HistoryMovementsModal({ onClose }: IHistoryMovementsModalProps) {
  const { isHistoryMovementModalOpen, product, closeHistoryMovementModal } = useHistoryMovementModal()

  const { data: rawMovements, isPending, isError } = useQuery({
    queryKey: ['movements', product.id],
    queryFn: () => listMovements(product.id),
    enabled: isHistoryMovementModalOpen && Boolean(product.id),
  })

  const movements = useMemo(
    () => (rawMovements ?? []).map(toInventoryMovement),
    [rawMovements]
  )

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
      {isPending ? (
        <p className="text-estoquei-text3 text-sm py-2">Carregando movimentações…</p>
      ) : null}
      {isError ? (
        <p className="text-estoquei-danger text-sm py-2">Não foi possível carregar o histórico.</p>
      ) : null}
      {!isPending && !isError
        ? movements.map((movement) => {
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
                <div className="ml-auto shrink-0 pr-2">
                  <span
                    className={cn(
                      'text-sm tabular-nums',
                      isInbound ? 'text-estoquei-green' : 'text-estoquei-danger'
                    )}
                  >
                    {isInbound ? '+' : '-'}
                    {movement.quantity}
                  </span>
                </div>
              </div>
            )
          })
        : null}
    </Modal>
  )
}
