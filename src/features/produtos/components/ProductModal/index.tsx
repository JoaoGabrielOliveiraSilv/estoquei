import { Plus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/shared/components/ui/Button'
import { Input } from '@/shared/components/ui/Input'
import Modal from '@/shared/components/ui/Modal/index'
import { ModalSection } from '@/shared/components/ui/ModalSection'
import { Textarea } from '@/shared/components/ui/Textarea'
import UploadImage from '@/shared/components/ui/UploadImage'
import { cn } from '@/shared/utils/cn'

import type { IProductModalProps } from './types'

const ICON_ITEMS = {
  beer: {
    emoji: '🍺',
    name: 'Cerveja',
  },
  wine: {
    emoji: '🍷',
    name: 'Vinho',
  },
  glassWater: {
    emoji: '🥛',
    name: 'Água',
  },
  sandwich: {
    emoji: '🍔',
    name: 'Sanduíche',
  },
  shoppingBag: {
    emoji: '🛒',
    name: 'Sacola',
  },
  package: {
    emoji: '📦',
    name: 'Pacote',
  },
  boxes: {
    emoji: '🗂️',
    name: 'Caixas',
  },
}

export default function ProductModal({ open, onClose }: IProductModalProps) {
  const [selectedIconItem, setSelectedIconItem] = useState<keyof typeof ICON_ITEMS | null>(null)

  if (!open) return null

  const handleIconItemClick = (iconKey: keyof typeof ICON_ITEMS) => {
    setSelectedIconItem(iconKey)
  }

  return (
    <Modal
      open={open}
      title="Novo Produto"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="accent" onClick={onClose}>
            <Plus size={16} />
            Criar produto
          </Button>
        </div>
      }
    >
      <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
        <ModalSection title="Ícone" className="gap-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(ICON_ITEMS).map(([iconKey, iconItem]) => (
              <Button
                key={iconItem.name}
                variant={selectedIconItem === iconKey ? 'accent' : 'ghost'}
                size="icon"
                className="w-[38px] h-[38px] text-[28px]"
                onClick={() => handleIconItemClick(iconKey as keyof typeof ICON_ITEMS)}
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
          />
        </ModalSection>

        <ModalSection title="Descrição">
          <Textarea
            rows={4}
            placeholder="Digite a descrição do produto..."
            className={cn('text-[15px]')}
          />
        </ModalSection>

        <ModalSection title="Imagem">
          <UploadImage />
        </ModalSection>
      </form>
    </Modal>
  )
}
