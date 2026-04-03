import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback, useMemo, useState } from 'react'

import {
  HistoryMovementsModal,
  NewInventoryMovementsModal,
  useHistoryMovementModal,
  useNewInventoryMovementModal,
} from '@/features/inventory-movements'
import { ProductCatalogView } from '@/features/produtos'
import { computeProductStats } from '@/features/produtos/utils/product-stats'
import { getApiErrorMessage } from '@/shared/api/errors'
import { deleteProduct, listProducts } from '@/shared/api/products-api'
import type { Product } from '@/shared/types/product'
import { mapApiProductToProduct } from '@/shared/utils/map-api-product'

export default function ProductCatalogPage() {
  const queryClient = useQueryClient()
  const [productPendingDelete, setProductPendingDelete] = useState<Product | null>(null)
  const [catalogError, setCatalogError] = useState<string | null>(null)

  const { isNewInventoryMovementModalOpen, openNewInventoryMovementModal } =
    useNewInventoryMovementModal()
  const { closeHistoryMovementModal, openHistoryMovementModal } = useHistoryMovementModal()

  const {
    data: listData,
    isPending: isProductsPending,
    isError: isProductsError,
    error: productsError,
  } = useQuery({
    queryKey: ['products', { page: 1, limit: 100 }],
    queryFn: () => listProducts({ page: 1, limit: 100 }),
  })

  const products = useMemo(
    () => listData?.items.map((row) => mapApiProductToProduct(row)) ?? [],
    [listData]
  )

  const productStats = useMemo(() => computeProductStats(products), [products])

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      setProductPendingDelete(null)
      setCatalogError(null)
    },
    onError: (err) => {
      setCatalogError(getApiErrorMessage(err))
    },
  })

  const handleRequestDeleteProduct = useCallback((product: Product) => {
    setProductPendingDelete(product)
    setCatalogError(null)
  }, [])

  const handleCloseDeleteModal = useCallback(() => {
    setProductPendingDelete(null)
  }, [])

  const handleConfirmDelete = useCallback(() => {
    if (!productPendingDelete) return
    deleteMutation.mutate(productPendingDelete.id)
  }, [deleteMutation, productPendingDelete])

  const handleNewMovement = useCallback(
    (product: Product) => {
      openNewInventoryMovementModal(product)
    },
    [openNewInventoryMovementModal]
  )

  const handleOpenMovementHistory = useCallback(
    (product: Product) => {
      openHistoryMovementModal(product)
    },
    [openHistoryMovementModal]
  )

  const listErrorMessage =
    isProductsError && productsError ? getApiErrorMessage(productsError) : null

  if (isProductsPending) {
    return (
      <section className="p-4 bg-estoquei-bg w-full min-h-screen mb-20">
        <p className="text-estoquei-text3 text-sm">Carregando produtos…</p>
      </section>
    )
  }

  if (listErrorMessage) {
    return (
      <section className="p-4 bg-estoquei-bg w-full min-h-screen mb-20">
        <p className="text-estoquei-danger text-sm">{listErrorMessage}</p>
        <p className="text-estoquei-text3 text-xs mt-2">
          Confira se o backend está em execução, <code className="text-estoquei-text">VITE_API_URL</code> está
          correto e <code className="text-estoquei-text">VITE_API_JWT</code> foi definido no{' '}
          <code className="text-estoquei-text">.env</code> (mesmo fluxo do Bruno no repositório da API).
        </p>
      </section>
    )
  }

  return (
    <>
      {catalogError ? (
        <div className="px-4 pt-4">
          <p className="text-estoquei-danger text-sm">{catalogError}</p>
        </div>
      ) : null}
      <ProductCatalogView
        products={products}
        productStats={productStats}
        productPendingDelete={productPendingDelete}
        onRequestDeleteProduct={handleRequestDeleteProduct}
        onNewMovement={handleNewMovement}
        onOpenMovementHistory={handleOpenMovementHistory}
        onCloseDeleteModal={handleCloseDeleteModal}
        onConfirmDelete={handleConfirmDelete}
      />
      <HistoryMovementsModal onClose={closeHistoryMovementModal} />
      <NewInventoryMovementsModal open={isNewInventoryMovementModalOpen} />
    </>
  )
}
