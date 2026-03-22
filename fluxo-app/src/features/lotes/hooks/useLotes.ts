// Query hook for fetching product lot movements.
import { useQuery } from '@tanstack/react-query'
import { getLotesByProduto } from '../api/lotesApi'

export function useLotes(produtoId: string) {
  return useQuery({
    queryKey: ['lotes', produtoId],
    queryFn: () => getLotesByProduto(produtoId),
    enabled: Boolean(produtoId),
  })
}
