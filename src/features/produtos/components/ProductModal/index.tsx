import { Plus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/shared/components/ui/Button'
import { Input } from '@/shared/components/ui/Input'
import Modal from '@/shared/components/ui/Modal/index'
import { ModalSection } from '@/shared/components/ui/ModalSection'
import { Textarea } from '@/shared/components/ui/Textarea'
import UploadImage from '@/shared/components/ui/UploadImage'
import type { Product } from '@/shared/types/product'
import { PRODUCT_ICON_ITEMS } from '@/shared/types/product-icon'
import { cn } from '@/shared/utils/cn'

import type { IProductModalProps } from './types'

export default function ProductModal({ open, product, onClose }: IProductModalProps) {
  if (!open) return null

  return (
    <ProductModalBody key={product?.id ?? 'new'} product={product} onClose={onClose} />
  )
}

function ProductModalBody({ product, onClose }: { product?: Product; onClose: () => void }) {
  const [selectedIconItem, setSelectedIconItem] = useState<keyof typeof PRODUCT_ICON_ITEMS | null>(
    () => product?.emoji ?? null
  )
  const [name, setName] = useState(() => product?.name ?? '')
  const [description, setDescription] = useState(() => product?.description ?? '')

  const handleIconItemClick = (iconKey: keyof typeof PRODUCT_ICON_ITEMS) => {
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
          <Button variant="accent" onClick={() => {}}>
            <Plus size={16} />
            {product ? 'Salvar' : 'Criar produto'}
          </Button>
        </div>
      }
    >
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <ModalSection title="Ícone" className="gap-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(PRODUCT_ICON_ITEMS).map(([iconKey, iconItem]) => (
              <Button
                key={iconItem.name}
                variant={selectedIconItem === iconKey ? 'accent' : 'ghost'}
                size="icon"
                className="w-[38px] h-[38px] text-[28px]"
                onClick={() => handleIconItemClick(iconKey as keyof typeof PRODUCT_ICON_ITEMS)}
              >
                {iconItem.emoji}
              </Button>
            ))}
          </div>
        </ModalSection>

        <ModalSection title="Nome">
          <Input
            withIcon={false}
            placeholder="Digite o nome do produto"
            className={cn('text-[15px]')}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ModalSection>

        <ModalSection title="Descrição">
          <Textarea
            rows={4}
            placeholder="Digite a descrição do produto..."
            className={cn('text-[15px]')}
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
