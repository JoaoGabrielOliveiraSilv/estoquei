import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './index'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Salvar</Button>)

    expect(screen.getByRole('button', { name: 'Salvar' })).toBeInTheDocument()
  })

  it('shows "Carregando..." when loading is true', () => {
    render(<Button loading>Salvar</Button>)

    expect(screen.getByRole('button')).toHaveTextContent('Carregando...')
  })

  it('is disabled when loading is true', () => {
    render(<Button loading>Salvar</Button>)

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Salvar</Button>)

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Clique</Button>)

    await userEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const onClick = vi.fn()
    render(<Button disabled onClick={onClick}>Clique</Button>)

    await userEvent.click(screen.getByRole('button'))

    expect(onClick).not.toHaveBeenCalled()
  })
})
