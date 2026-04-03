import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL ?? ''
const token = import.meta.env.VITE_API_JWT ?? ''

export const api = axios.create({
  baseURL,
  headers: {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  },
})
