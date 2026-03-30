import { Plus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/shared/components/ui/Button'
import { buttonVariants } from '@/shared/components/ui/Button/variants'
import { Input } from '@/shared/components/ui/Input'
import Modal from '@/shared/components/ui/Modal/index'
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
  if (!open) return null

  const [selectedIconItem, setSelectedIconItem] = useState<keyof typeof ICON_ITEMS | null>(null)

  const sectionTitleStyle = cn(
    'text-estoquei-text3 text-[13px] font-medium uppercase',
    'tracking-[.08em]'
  )

  const handleIconItemClick = (
    iconItem: (typeof ICON_ITEMS)[keyof typeof ICON_ITEMS],
    iconKey: keyof typeof ICON_ITEMS
  ) => {
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
        {/* Icon Section */}
        <div className="flex flex-col gap-4">
          <span className={sectionTitleStyle}>Ícone</span>
          <div className="flex flex-wrap gap-2">
            {Object.entries(ICON_ITEMS).map(([iconKey, iconItem]) => (
              <Button
                key={iconItem.name}
                variant={selectedIconItem == iconKey ? 'accent' : 'ghost'}
                size="icon"
                className="w-[38px] h-[38px] text-[28px]"
                onClick={() => handleIconItemClick(iconItem, iconKey as keyof typeof ICON_ITEMS)}
              >
                {iconItem.emoji}
              </Button>
            ))}
          </div>
        </div>

        {/* Name Section */}
        <div className="flex flex-col gap-2">
          <span className={sectionTitleStyle}>Nome</span>
          <Input
            withIcon={false}
            placeholder="Digite o nome do produto"
            className={cn('text-[15px]')}
          />
        </div>

        {/* Description Section */}
        <div className="flex flex-col gap-2">
          <span className={sectionTitleStyle}>Descrição</span>
          <Textarea
            rows={4}
            placeholder="Digite a descrição do produto..."
            className={cn('text-[15px]')}
          />
        </div>

        {/* Image Section */}
        <div className="flex flex-col gap-2">
          <span className={sectionTitleStyle}>Imagem</span>
          <UploadImage />
        </div>
      </form>
    </Modal>
  )
}
