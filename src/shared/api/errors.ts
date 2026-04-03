import axios from 'axios'

export function getApiErrorMessage(error: unknown): string {
  if (
    axios.isAxiosError(error) &&
    error.response?.data &&
    typeof error.response.data === 'object' &&
    error.response.data !== null &&
    'error' in error.response.data
  ) {
    return String((error.response.data as { error: string }).error)
  }
  if (error instanceof Error) {
    return error.message
  }
  return 'Algo deu errado. Tente novamente.'
}
