// Mutation hook placeholders for product create/update/delete flows.
import { useMutation } from '@tanstack/react-query'
import {
  createProduto,
  deleteProduto,
  updateProduto,
} from '../api/produtosApi'
import type { CreateProdutoDTO } from '../types'

export function useProdutoMutations() {
  const createMutation = useMutation({
    mutationFn: (payload: CreateProdutoDTO) => createProduto(payload),
  })

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: Partial<CreateProdutoDTO> }) =>
      updateProduto(id, payload),
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteProduto(id),
  })

  return { createMutation, updateMutation, deleteMutation }
}
