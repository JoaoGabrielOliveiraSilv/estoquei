export const PRODUCT_ICON_ITEMS = {
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
} as const

export type ProductIconItem = keyof typeof PRODUCT_ICON_ITEMS
