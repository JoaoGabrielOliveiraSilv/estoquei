// Mutation hook placeholders for lot create operations.
import { useMutation } from '@tanstack/react-query'
import { createLote } from '../api/lotesApi'
import type { CreateLoteDTO } from '../types'

export function useLoteMutations() {
  const createMutation = useMutation({
    mutationFn: (payload: CreateLoteDTO) => createLote(payload),
  })

  return { createMutation }
}
