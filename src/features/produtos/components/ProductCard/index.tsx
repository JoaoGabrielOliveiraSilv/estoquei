import { LayersPlus, RotateCcw, SquarePen, Trash } from 'lucide-react'
import { useCallback, useState } from 'react'

import { useProductModal } from '@/features/produtos/hooks/use-product-modal'
import { mockInventoryMovements } from '@/mock-data'
import { Button } from '@/shared/components/ui/Button'
import { DotInfo } from '@/shared/components/ui/DotInfo'
import Modal from '@/shared/components/ui/Modal'
import { useHistoryMovementModal } from '@/shared/hooks/use-history-movement-modal'
import { useNewInventoryMovementModal } from '@/shared/hooks/use-new-inventory-movement-modal'
import { cn } from '@/shared/utils/cn'

import { variants } from './variants'

import type { IProductCardProps } from './types'

export default function ProductCard({
  product,
  gridProps,
  containerClassName,
  onDeleteProduct,
}: IProductCardProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const { openNewInventoryMovementModal } = useNewInventoryMovementModal()
  const { open: openProductModal } = useProductModal()
  const { openHistoryMovementModal } = useHistoryMovementModal()
  const { quantity: quantityStyle, status: statusStyle } = variants[product.status]

  const handleNewMovementClick = useCallback(() => {
    openNewInventoryMovementModal(product)
  }, [product, openNewInventoryMovementModal])

  const handleEditProductClick = useCallback(() => {
    openProductModal(product)
  }, [product, openProductModal])

  const handleHistoryMovementClick = useCallback(() => {
    openHistoryMovementModal(product, mockInventoryMovements)
  }, [product, openHistoryMovementModal])

  const handleOpenDeleteModal = useCallback(() => {
    setIsDeleteModalOpen(true)
  }, [])

  const handleCloseDeleteModal = useCallback(() => {
    setIsDeleteModalOpen(false)
  }, [])

  const handleConfirmDelete = useCallback(() => {
    onDeleteProduct?.(product)
    setIsDeleteModalOpen(false)
  }, [onDeleteProduct, product])

  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        'bg-estoquei-bg p-4',
        'border-b border-estoquei-border',
        gridProps,
        containerClassName
      )}
    >
      <div className="flex items-center justify-between md:contents">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-estoquei-bg3 border border-estoquei-border flex items-center justify-center">
            {product.icon}
          </div>
          <div className="flex flex-col">
            <h3 className="text-estoquei-text font-bold">{product.name}</h3>
            <p className="text-estoquei-text2 text-sm">{product.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={cn(quantityStyle.textColor, 'text-xl md:text-sm px-1')}
          >{`${product.quantity} un.`}</span>
        </div>
      </div>

      <div className="flex items-center justify-between md:contents">
        <DotInfo
          dotColor={statusStyle.dot}
          spanClassName={cn(statusStyle.textColor, 'text-xs')}
          containerClassName={cn(
            statusStyle.bg,
            statusStyle.border,
            'flex items-center self-center gap-1 h-fit px-2 py-[3px] rounded-full border'
          )}
        >
          {statusStyle.text}
        </DotInfo>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleNewMovementClick}>
            <LayersPlus size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleHistoryMovementClick}>
            <RotateCcw size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleEditProductClick}>
            <SquarePen size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleOpenDeleteModal} aria-label="Excluir produto">
            <Trash size={16} />
          </Button>
        </div>
      </div>

      {/* TODO: elevar modal para o pai (uma instância no DOM em vez de um por card). */}
      <Modal
        open={isDeleteModalOpen}
        title="Excluir produto?"
        onClose={handleCloseDeleteModal}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={handleCloseDeleteModal}>
              Cancelar
            </Button>
            <Button
              variant="ghost"
              className="border-estoquei-danger/50 text-estoquei-danger hover:bg-estoquei-danger/10"
              onClick={handleConfirmDelete}
            >
              Excluir
            </Button>
          </div>
        }
      >
        <p className="text-estoquei-text2 text-sm">
          Tem certeza que deseja excluir <span className="text-estoquei-text font-medium">{product.name}</span>
          ? Essa ação não pode ser desfeita.
        </p>
      </Modal>
    </div>
  )
}
