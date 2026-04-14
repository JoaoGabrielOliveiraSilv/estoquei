import axios from 'axios'

import { getApiErrorMessage } from './errors'

describe('getApiErrorMessage', () => {
  it('returns the error field from an Axios response', () => {
    const axiosError = new axios.AxiosError('request failed')
    axiosError.response = {
      data: { error: 'Produto não encontrado' },
      status: 404,
      statusText: 'Not Found',
      headers: {},
      config: axiosError.config ?? ({} as never),
    }

    expect(getApiErrorMessage(axiosError)).toBe('Produto não encontrado')
  })

  it('returns message from a generic Error', () => {
    expect(getApiErrorMessage(new Error('algo falhou'))).toBe('algo falhou')
  })

  it('returns fallback string for unknown errors', () => {
    expect(getApiErrorMessage('string error')).toBe('Algo deu errado. Tente novamente.')
    expect(getApiErrorMessage(null)).toBe('Algo deu errado. Tente novamente.')
    expect(getApiErrorMessage(42)).toBe('Algo deu errado. Tente novamente.')
  })

  it('returns the AxiosError message when there is no response data', () => {
    // AxiosError extends Error, então cai no branch `instanceof Error`
    const axiosError = new axios.AxiosError('network error')

    expect(getApiErrorMessage(axiosError)).toBe('network error')
  })
})
