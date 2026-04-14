import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import type { Product } from '@/shared/types/product'

import ProductCard from './index'

// useProductModal usa o store Zustand — mockamos para isolar o componente
vi.mock('@/features/produtos/hooks', () => ({
  useProductModal: () => ({
    isOpen: false,
    product: undefined,
    open: vi.fn(),
    close: vi.fn(),
  }),
}))

const baseProduct: Product = {
  id: '1',
  emoji: 'package',
  icon: <span>📦</span>,
  name: 'Produto Teste',
  description: 'Descrição do produto',
  quantity: 10,
  status: 'normal',
}

describe('ProductCard', () => {
  it('renders product name and description', () => {
    render(<ProductCard product={baseProduct} gridProps="" />)

    expect(screen.getByText('Produto Teste')).toBeInTheDocument()
    expect(screen.getByText('Descrição do produto')).toBeInTheDocument()
  })

  it('renders product quantity', () => {
    render(<ProductCard product={baseProduct} gridProps="" />)

    expect(screen.getByText('10 un.')).toBeInTheDocument()
  })

  it('shows "Normal" status badge for normal status', () => {
    render(<ProductCard product={baseProduct} gridProps="" />)

    expect(screen.getByText('Normal')).toBeInTheDocument()
  })

  it('shows "Baixo" status badge for warning status', () => {
    render(<ProductCard product={{ ...baseProduct, status: 'warning' }} gridProps="" />)

    expect(screen.getByText('Baixo')).toBeInTheDocument()
  })

  it('shows "Zerado" status badge for danger status', () => {
    render(<ProductCard product={{ ...baseProduct, status: 'danger' }} gridProps="" />)

    expect(screen.getByText('Zerado')).toBeInTheDocument()
  })

  it('calls onRequestDeleteProduct with the product when delete button is clicked', async () => {
    const onDelete = vi.fn()
    render(<ProductCard product={baseProduct} gridProps="" onRequestDeleteProduct={onDelete} />)

    await userEvent.click(screen.getByRole('button', { name: 'Excluir produto' }))

    expect(onDelete).toHaveBeenCalledWith(baseProduct)
  })

  it('calls onNewMovement with the product when new movement button is clicked', async () => {
    const onNewMovement = vi.fn()
    render(<ProductCard product={baseProduct} gridProps="" onNewMovement={onNewMovement} />)

    // Botões de ação: [0] novo movimento, [1] histórico, [2] editar, [3] excluir
    const buttons = screen.getAllByRole('button')
    await userEvent.click(buttons[0])

    expect(onNewMovement).toHaveBeenCalledWith(baseProduct)
  })

  it('calls onOpenMovementHistory with the product when history button is clicked', async () => {
    const onHistory = vi.fn()
    render(<ProductCard product={baseProduct} gridProps="" onOpenMovementHistory={onHistory} />)

    const buttons = screen.getAllByRole('button')
    await userEvent.click(buttons[1])

    expect(onHistory).toHaveBeenCalledWith(baseProduct)
  })
})
