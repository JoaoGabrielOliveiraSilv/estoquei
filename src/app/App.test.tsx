// Smoke test to ensure app root renders without crashing.
import { render, screen } from '@testing-library/react'

import { App } from './App'
import { AppProviders } from './providers'

describe('App', () => {
  it('renders home route content', () => {
    render(
      <AppProviders>
        <App />
      </AppProviders>
    )

    expect(screen.getByRole('heading', { name: 'Produtos' })).toBeInTheDocument()
  })
})
