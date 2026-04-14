import axios from 'axios'

import { clearToken, getToken } from '@/shared/utils/auth'

const baseURL = import.meta.env.VITE_API_URL ?? ''

export const api = axios.create({ baseURL })

api.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname !== '/login') {
      clearToken()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
