// Smoke test to ensure app root renders without crashing.
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { App } from './App'
import { AppProviders } from './providers'

// Sem mock a query fica pending para sempre (sem backend no CI)
vi.mock('@/shared/api/products-api', () => ({
  listProducts: vi.fn().mockResolvedValue({
    items: [],
    total: 0,
    page: 1,
    limit: 100,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  }),
  createProduct: vi.fn(),
  updateProduct: vi.fn(),
  deleteProduct: vi.fn(),
}))

describe('App', () => {
  beforeEach(() => {
    // ProtectedRoute exige token no localStorage para não redirecionar ao /login
    localStorage.setItem('estoquei_token', 'test-token')
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('renders home route content', async () => {
    render(
      <AppProviders>
        <App />
      </AppProviders>
    )

    // findByRole aguarda o React Query resolver antes de checar
    expect(await screen.findByRole('heading', { name: 'Produtos' })).toBeInTheDocument()
  })
})
