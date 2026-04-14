import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

import * as authApi from '@/shared/api/auth-api'
import * as authUtils from '@/shared/utils/auth'

import LoginPage from './index'

vi.mock('@/shared/api/auth-api')
vi.mock('@/shared/utils/auth')

const mockedLogin = vi.mocked(authApi.login)
const mockedSetToken = vi.mocked(authUtils.setToken)

const mockNavigate = vi.fn()
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router-dom')>()
  return { ...actual, useNavigate: () => mockNavigate }
})

function renderLoginPage() {
  return render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  )
}

describe('LoginPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders username and password fields', () => {
    renderLoginPage()

    expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    renderLoginPage()

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })

  it('navigates to / on successful login', async () => {
    mockedLogin.mockResolvedValueOnce('jwt-token')
    renderLoginPage()

    await userEvent.type(screen.getByLabelText(/usuário/i), 'admin')
    await userEvent.type(screen.getByLabelText(/senha/i), 'senha123')
    await userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    expect(mockedLogin).toHaveBeenCalledWith('admin', 'senha123')
    expect(mockedSetToken).toHaveBeenCalledWith('jwt-token')
    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true })
  })

  it('shows error message on failed login', async () => {
    mockedLogin.mockRejectedValueOnce(new Error('Unauthorized'))
    renderLoginPage()

    await userEvent.type(screen.getByLabelText(/usuário/i), 'admin')
    await userEvent.type(screen.getByLabelText(/senha/i), 'errada')
    await userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    expect(await screen.findByRole('alert')).toHaveTextContent('Usuário ou senha inválidos.')
    expect(mockNavigate).not.toHaveBeenCalled()
  })

  it('marks inputs as invalid and links them to the error on failed login', async () => {
    mockedLogin.mockRejectedValueOnce(new Error('Unauthorized'))
    renderLoginPage()

    await userEvent.type(screen.getByLabelText(/usuário/i), 'admin')
    await userEvent.type(screen.getByLabelText(/senha/i), 'errada')
    await userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    await screen.findByRole('alert')

    const usernameInput = screen.getByLabelText(/usuário/i)
    const passwordInput = screen.getByLabelText(/senha/i)

    expect(usernameInput).toHaveAttribute('aria-invalid', 'true')
    expect(passwordInput).toHaveAttribute('aria-invalid', 'true')
    expect(usernameInput).toHaveAttribute('aria-describedby', 'login-error')
    expect(passwordInput).toHaveAttribute('aria-describedby', 'login-error')
  })

  it('disables the button while loading', async () => {
    mockedLogin.mockImplementationOnce(() => new Promise(() => {}))
    renderLoginPage()

    await userEvent.type(screen.getByLabelText(/usuário/i), 'admin')
    await userEvent.type(screen.getByLabelText(/senha/i), 'senha123')
    await userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    expect(screen.getByRole('button')).toBeDisabled()
  })
})
