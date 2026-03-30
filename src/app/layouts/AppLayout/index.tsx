import { LayersPlus, PackagePlus } from 'lucide-react'
import { useCallback, useMemo } from 'react'
import { Outlet } from 'react-router'

import NewInventoryMovementsModal from '@/features/inventory-movements/components/new-movements-modal'
import { useProductModal } from '@/features/produtos'
import ProductModal from '@/features/produtos/components/ProductModal'
import MobileFooter from '@/shared/components/layout/MobileFooter'
import PageHeader from '@/shared/components/layout/PageHeader'
import SideBar from '@/shared/components/layout/SideBar'
import { useNewInventoryMovementModal } from '@/shared/hooks/use-new-inventory-movement-modal'

import type { IAppLayoutProps } from './types'

export function AppLayout({ headerTitle }: IAppLayoutProps) {
  const { isNewInventoryMovementModalOpen } = useNewInventoryMovementModal()
  const {
    close: closeProductModal,
    open: openProductModal,
    isOpen: isProductModalOpen,
    product: productToEdit,
  } = useProductModal()

  const handleNewProductModalOpen = useCallback(() => {
    openProductModal()
  }, [openProductModal])

  const handleProductModalClose = useCallback(() => {
    closeProductModal()
  }, [closeProductModal])

  const MENU_ITEMS = useMemo(
    () => [
      {
        label: 'Novo Produto',
        icon: PackagePlus,
        onClick: handleNewProductModalOpen,
      },
    ],
    [handleNewProductModalOpen]
  )

  return (
    <div className="flex h-screen bg-estoquei-bg">
      <NewInventoryMovementsModal open={isNewInventoryMovementModalOpen} />
      <ProductModal
        open={isProductModalOpen}
        product={productToEdit}
        onClose={handleProductModalClose}
      />
      <SideBar items={MENU_ITEMS} />
      <MobileFooter items={MENU_ITEMS} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <PageHeader title={headerTitle} countItems={10} />

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
