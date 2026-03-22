// Query hook for fetching the produtos list.
import { useQuery } from '@tanstack/react-query'

import { getProdutos } from '../api/produtosApi'

export function useProdutos() {
  return useQuery({
    queryKey: ['produtos'],
    queryFn: getProdutos,
  })
}
