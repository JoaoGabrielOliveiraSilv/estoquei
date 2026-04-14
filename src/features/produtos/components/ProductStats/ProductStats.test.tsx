import { render, screen } from '@testing-library/react'

import ProductStats from './index'

const defaultProps = {
  total: { quantity: 150, quantityProducts: 10 },
  lowStock: { quantity: 3, limit: 20 },
  outOfStockQuantity: 2,
}

describe('ProductStats', () => {
  it('renders section labels', () => {
    render(<ProductStats {...defaultProps} />)

    expect(screen.getByText('TOTAL')).toBeInTheDocument()
    expect(screen.getByText('BAIXO')).toBeInTheDocument()
    expect(screen.getByText('ZERADO')).toBeInTheDocument()
  })

  it('renders total quantity', () => {
    render(<ProductStats {...defaultProps} />)

    expect(screen.getByText('150')).toBeInTheDocument()
  })

  it('renders number of products in total label', () => {
    render(<ProductStats {...defaultProps} />)

    expect(screen.getByText(/em 10 produtos/)).toBeInTheDocument()
  })

  it('renders low stock count', () => {
    render(<ProductStats {...defaultProps} />)

    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders out of stock count', () => {
    render(<ProductStats {...defaultProps} />)

    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('reflects updated values when props change', () => {
    const { rerender } = render(<ProductStats {...defaultProps} />)

    rerender(<ProductStats {...defaultProps} total={{ quantity: 999, quantityProducts: 5 }} />)

    expect(screen.getByText('999')).toBeInTheDocument()
    expect(screen.getByText(/em 5 produtos/)).toBeInTheDocument()
  })
})
