import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ArrowDown, ArrowUp, LayersPlus } from 'lucide-react'
import { useCallback, useState } from 'react'

import { getApiErrorMessage } from '@/shared/api/errors'
import { createMovement } from '@/shared/api/movements-api'
import { Button } from '@/shared/components/ui/Button'
import { Input } from '@/shared/components/ui/Input'
import Modal from '@/shared/components/ui/Modal'
import { ModalSection } from '@/shared/components/ui/ModalSection'

import { useNewInventoryMovementModal } from '../../hooks/use-new-inventory-movement-modal'

import type { INewMovementsModalProps } from './types'

function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10)
}

export default function NewInventoryMovementsModal({
  open,
  onClose,
  onSubmit,
}: INewMovementsModalProps) {
  const queryClient = useQueryClient()
  const [movementType, setMovementType] = useState<'outbound' | 'inbound'>('inbound')
  const [quantityInput, setQuantityInput] = useState('')
  const [counterPartyName, setCounterPartyName] = useState('')
  const [formError, setFormError] = useState<string | null>(null)

  const { closeNewInventoryMovementModal, productToMove: product } = useNewInventoryMovementModal()
  const counterparty = movementType === 'inbound' ? 'fornecedor' : 'cliente'

  const resetForm = useCallback(() => {
    setMovementType('inbound')
    setQuantityInput('')
    setCounterPartyName('')
    setFormError(null)
  }, [])

  const handleClose = useCallback(() => {
    resetForm()
    closeNewInventoryMovementModal()
    onClose?.()
  }, [closeNewInventoryMovementModal, onClose, resetForm])

  const movementMutation = useMutation({
    mutationFn: async () => {
      const qty = Number.parseInt(quantityInput, 10)
      if (!Number.isFinite(qty) || qty < 1) {
        throw new Error('Informe uma quantidade válida.')
      }
      const name = counterPartyName.trim()
      if (!name) {
        throw new Error(`Informe o nome do ${counterparty}.`)
      }
      if (movementType === 'outbound' && qty > product.quantity) {
        throw new Error('Quantidade maior que o estoque disponível.')
      }
      return createMovement(product.id, {
        type: movementType,
        quantity: qty,
        counterPartyName: name,
        date: todayIsoDate(),
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      queryClient.invalidateQueries({ queryKey: ['movements', product.id] })
      onSubmit?.()
      handleClose()
    },
    onError: (err) => {
      setFormError(getApiErrorMessage(err))
    },
  })

  const handleSubmit = useCallback(() => {
    setFormError(null)
    movementMutation.mutate()
  }, [movementMutation])

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
          <Button variant="accent" onClick={handleSubmit} disabled={movementMutation.isPending}>
            <LayersPlus size={16} aria-hidden />
            Registrar movimentação
          </Button>
        </div>
      }
    >
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        {formError ? <p className="text-estoquei-danger text-sm">{formError}</p> : null}
        <ModalSection title="Tipo" className="w-full">
          <div className="flex w-full items-center justify-between gap-2">
            <Button
              variant={movementType === 'inbound' ? 'green-selected' : 'ghost'}
              className="w-full"
              type="button"
              aria-pressed={movementType === 'inbound'}
              onClick={() => setMovementType('inbound')}
            >
              <ArrowUp size={16} aria-hidden />
              Entrada
            </Button>
            <Button
              variant={movementType === 'outbound' ? 'red-selected' : 'ghost'}
              className="w-full"
              type="button"
              aria-pressed={movementType === 'outbound'}
              onClick={() => setMovementType('outbound')}
            >
              <ArrowDown size={16} aria-hidden />
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
              aria-label="Quantidade"
              value={quantityInput}
              onChange={(e) => setQuantityInput(e.target.value)}
            />
          </ModalSection>
          <ModalSection title="Atual" className="w-full">
            <Input
              type="number"
              className="text-estoquei-text3"
              aria-label="Estoque atual"
              value={product.quantity}
              disabled
            />
          </ModalSection>
        </div>

        <ModalSection title={counterparty} className="w-full">
          <Input
            type="text"
            placeholder={`Digite o nome do ${counterparty}`}
            aria-label={`Nome do ${counterparty}`}
            value={counterPartyName}
            onChange={(e) => setCounterPartyName(e.target.value)}
          />
        </ModalSection>
      </form>
    </Modal>
  )
}
