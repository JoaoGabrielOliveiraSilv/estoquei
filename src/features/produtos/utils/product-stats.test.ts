import type { Product } from '@/shared/types/product'

import { computeProductStats } from './product-stats'

function makeProduct(overrides: Partial<Product> = {}): Product {
  return {
    id: '1',
    emoji: 'package',
    icon: null,
    name: 'Produto',
    description: '',
    quantity: 10,
    status: 'normal',
    ...overrides,
  }
}

describe('computeProductStats', () => {
  it('returns zeros for empty array', () => {
    const result = computeProductStats([])

    expect(result.total.quantity).toBe(0)
    expect(result.total.quantityProducts).toBe(0)
    expect(result.lowStock.quantity).toBe(0)
    expect(result.outOfStockQuantity).toBe(0)
  })

  it('sums quantities across all products', () => {
    const products = [makeProduct({ quantity: 10 }), makeProduct({ id: '2', quantity: 5 })]

    expect(computeProductStats(products).total.quantity).toBe(15)
  })

  it('counts total number of products', () => {
    const products = [makeProduct({ id: '1' }), makeProduct({ id: '2' }), makeProduct({ id: '3' })]

    expect(computeProductStats(products).total.quantityProducts).toBe(3)
  })

  it('counts warning status products as lowStock', () => {
    const products = [
      makeProduct({ id: '1', status: 'warning' }),
      makeProduct({ id: '2', status: 'normal' }),
      makeProduct({ id: '3', status: 'warning' }),
    ]

    expect(computeProductStats(products).lowStock.quantity).toBe(2)
  })

  it('counts danger status products as outOfStock', () => {
    const products = [
      makeProduct({ id: '1', status: 'danger' }),
      makeProduct({ id: '2', status: 'normal' }),
    ]

    expect(computeProductStats(products).outOfStockQuantity).toBe(1)
  })

  it('counts zero-quantity products as outOfStock regardless of status', () => {
    const products = [makeProduct({ id: '1', quantity: 0, status: 'normal' })]

    expect(computeProductStats(products).outOfStockQuantity).toBe(1)
  })

  it('exposes the LOW_STOCK_DISPLAY_LIMIT constant via lowStock.limit', () => {
    const result = computeProductStats([])

    expect(result.lowStock.limit).toBe(20)
  })
})
