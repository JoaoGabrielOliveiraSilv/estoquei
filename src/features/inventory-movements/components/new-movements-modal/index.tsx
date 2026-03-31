import { ArrowDown, ArrowUp, LayersPlus } from 'lucide-react'
import { useCallback, useState } from 'react'

import { Button } from '@/shared/components/ui/Button'
import { Input } from '@/shared/components/ui/Input'
import Modal from '@/shared/components/ui/Modal'
import { ModalSection } from '@/shared/components/ui/ModalSection'

import { useNewInventoryMovementModal } from '../../hooks/use-new-inventory-movement-modal'

import type { INewMovementsModalProps } from './types'

export default function NewInventoryMovementsModal({
  open,
  onClose,
  onSubmit,
}: INewMovementsModalProps) {
  const [movementType, setMovementType] = useState<'outbound' | 'inbound'>('inbound')
  const { closeNewInventoryMovementModal, productToMove: product } = useNewInventoryMovementModal()
  const counterparty = movementType === 'inbound' ? 'fornecedor' : 'cliente'

  const handleClose = useCallback(() => {
    closeNewInventoryMovementModal()
    onClose?.()
  }, [closeNewInventoryMovementModal, onClose])

  const handleSubmit = useCallback(() => {
    onSubmit?.()
    closeNewInventoryMovementModal()
    onClose?.()
  }, [closeNewInventoryMovementModal, onSubmit, onClose])

  if (!open || !product.id) return null

  return (
    <Modal
      open={open}
      title={`Movimentar - ${product.name}`}
      onClose={handleClose}
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="accent" onClick={handleSubmit}>
            <LayersPlus size={16} />
            Registrar movimentação
          </Button>
        </div>
      }
    >
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <ModalSection title="Tipo" className="w-full">
          <div className="flex w-full items-center justify-between gap-2">
            <Button
              variant={movementType === 'inbound' ? 'green-selected' : 'ghost'}
              className="w-full"
              type="button"
              onClick={() => setMovementType('inbound')}
            >
              <ArrowUp size={16} />
              Entrada
            </Button>
            <Button
              variant={movementType === 'outbound' ? 'red-selected' : 'ghost'}
              className="w-full"
              type="button"
              onClick={() => setMovementType('outbound')}
            >
              <ArrowDown size={16} />
              Saída
            </Button>
          </div>
        </ModalSection>

        <div className="flex w-full items-center justify-between gap-2">
          <ModalSection title="Quantidade *" className="w-full">
            <Input
              type="number"
              min={1}
              step={1}
              max={movementType === 'outbound' ? product.quantity : undefined}
              inputMode="numeric"
              placeholder="Digite a quantidade"
            />
          </ModalSection>
          <ModalSection title="Atual" className="w-full">
            <Input
              type="number"
              className="text-estoquei-text3"
              value={product.quantity}
              disabled
            />
          </ModalSection>
        </div>

        <ModalSection title={counterparty} className="w-full">
          <Input type="text" placeholder={`Digite o nome do ${counterparty}`} />
        </ModalSection>
      </form>
    </Modal>
  )
}
