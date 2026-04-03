import { LayersPlus } from 'lucide-react'

import type { ApiProduct } from '@/shared/api/types'
import type { Product } from '@/shared/types/product'
import { PRODUCT_ICON_ITEMS, type ProductIconItem } from '@/shared/types/product-icon'

function emojiToIconKey(emoji: string): ProductIconItem {
  const keys = Object.keys(PRODUCT_ICON_ITEMS) as ProductIconItem[]
  for (const key of keys) {
    if (PRODUCT_ICON_ITEMS[key].emoji === emoji) {
      return key
    }
  }
  return 'package'
}

export function mapApiProductToProduct(row: ApiProduct): Product {
  const emoji = emojiToIconKey(row.emoji)
  return {
    id: row.id,
    emoji,
    icon: <LayersPlus size={16} className="text-estoquei-accent" />,
    name: row.name,
    description: row.description ?? '',
    quantity: row.quantity,
    status: row.status,
  }
}
