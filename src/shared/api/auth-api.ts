import { api } from './client'

export async function login(username: string, password: string): Promise<string> {
  const { data } = await api.post<{ data: { token: string } }>('/auth/login', { username, password })
  return data.data.token
}
