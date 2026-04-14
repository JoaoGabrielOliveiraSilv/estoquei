import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useCallback, useState } from 'react'

import { getApiErrorMessage } from '@/shared/api/errors'
import { createProduct, updateProduct } from '@/shared/api/products-api'
import { Button } from '@/shared/components/ui/Button'
import { Input } from '@/shared/components/ui/Input'
import Modal from '@/shared/components/ui/Modal'
import { ModalSection } from '@/shared/components/ui/ModalSection'
import { Textarea } from '@/shared/components/ui/Textarea'
import UploadImage from '@/shared/components/ui/UploadImage'
import type { Product } from '@/shared/types/product'
import { PRODUCT_ICON_ITEMS, type ProductIconItem } from '@/shared/types/product-icon'
import { cn } from '@/shared/utils/cn'

import type { IProductModalProps } from './types'

export default function ProductModal({ open, product, onClose }: IProductModalProps) {
  if (!open) return null

  return (
    <ProductModalBody key={product?.id ?? 'new'} product={product} onClose={onClose} />
  )
}

function ProductModalBody({ product, onClose }: { product?: Product; onClose: () => void }) {
  const queryClient = useQueryClient()
  const [selectedIconItem, setSelectedIconItem] = useState<ProductIconItem | null>(
    () => product?.emoji ?? null
  )
  const [name, setName] = useState(() => product?.name ?? '')
  const [description, setDescription] = useState(() => product?.description ?? '')
  const [formError, setFormError] = useState<string | null>(null)

  const iconKey = selectedIconItem ?? 'package'
  const emojiChar = PRODUCT_ICON_ITEMS[iconKey].emoji

  const createMutation = useMutation({
    mutationFn: () =>
      createProduct({
        name: name.trim(),
        description: description.trim() || null,
        imageUrl: null,
        emoji: emojiChar,
        quantity: 0,
        status: 'normal',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      setFormError(null)
      onClose()
    },
    onError: (err) => setFormError(getApiErrorMessage(err)),
  })

  const updateMutation = useMutation({
    mutationFn: () => {
      if (!product?.id) throw new Error('Produto inválido.')
      return updateProduct(product.id, {
        name: name.trim(),
        description: description.trim() || null,
        emoji: emojiChar,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      setFormError(null)
      onClose()
    },
    onError: (err) => setFormError(getApiErrorMessage(err)),
  })

  const isPending = createMutation.isPending || updateMutation.isPending

  const handleSave = useCallback(() => {
    setFormError(null)
    const trimmed = name.trim()
    if (!trimmed) {
      setFormError('Informe o nome do produto.')
      return
    }
    if (product?.id) {
      updateMutation.mutate()
    } else {
      createMutation.mutate()
    }
  }, [createMutation, name, product?.id, updateMutation])

  const handleIconItemClick = (iconKey: ProductIconItem) => {
    setSelectedIconItem(iconKey)
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Modal
      open
      title={product ? 'Editar Produto' : 'Novo Produto'}
      onClose={handleClose}
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="accent" onClick={handleSave} disabled={isPending}>
            {product ? (
              'Salvar'
            ) : (
              <>
                <Plus size={16} aria-hidden />
                Criar produto
              </>
            )}
          </Button>
        </div>
      }
    >
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        {formError ? <p className="text-estoquei-danger text-sm">{formError}</p> : null}
        <ModalSection title="Ícone" className="gap-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(PRODUCT_ICON_ITEMS).map(([iconKey, iconItem]) => (
              <Button
                key={iconItem.name}
                variant={selectedIconItem === iconKey ? 'accent' : 'ghost'}
                size="icon"
                className="w-[38px] h-[38px] text-[28px]"
                aria-label={iconItem.name}
                aria-pressed={selectedIconItem === iconKey}
                onClick={() => handleIconItemClick(iconKey as ProductIconItem)}
              >
                <span aria-hidden="true">{iconItem.emoji}</span>
              </Button>
            ))}
          </div>
        </ModalSection>

        <ModalSection title="Nome">
          <Input
            withIcon={false}
            placeholder="Digite o nome do produto"
            className={cn('text-[15px]')}
            aria-label="Nome do produto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ModalSection>

        <ModalSection title="Descrição">
          <Textarea
            rows={4}
            placeholder="Digite a descrição do produto..."
            className={cn('text-[15px]')}
            aria-label="Descrição do produto"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </ModalSection>

        <ModalSection title="Imagem">
          <UploadImage />
        </ModalSection>
      </form>
    </Modal>
  )
}
