import { vi } from 'vitest'

import { login } from './auth-api'
import { api } from './client'

vi.mock('./client', () => ({
  api: {
    post: vi.fn(),
  },
}))

const mockedPost = vi.mocked(api.post)

describe('login', () => {
  it('returns the token on success', async () => {
    mockedPost.mockResolvedValueOnce({ data: { data: { token: 'jwt-token' } } })

    const token = await login('admin', 'senha123')

    expect(token).toBe('jwt-token')
    expect(mockedPost).toHaveBeenCalledWith('/auth/login', { username: 'admin', password: 'senha123' })
  })

  it('throws when the request fails', async () => {
    mockedPost.mockRejectedValueOnce(new Error('Network Error'))

    await expect(login('admin', 'errada')).rejects.toThrow('Network Error')
  })
})
