import { LayersPlus, PackagePlus } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'
import { Outlet } from 'react-router'

import ProductModal from '@/features/produtos/components/ProductModal'
import MobileFooter from '@/shared/components/layout/MobileFooter'
import PageHeader from '@/shared/components/layout/PageHeader'
import SideBar from '@/shared/components/layout/SideBar'

import type { IAppLayoutProps } from './types'

export function AppLayout({ headerTitle }: IAppLayoutProps) {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false)

  const handleNewProductModalOpen = useCallback(() => {
    setIsNewProductModalOpen(true)
  }, [])

  const handleNewProductModalClose = useCallback(() => {
    setIsNewProductModalOpen(false)
  }, [])

  const MENU_ITEMS = useMemo(
    () => [
      {
        label: 'Novo Produto',
        icon: PackagePlus,
        onClick: handleNewProductModalOpen,
      },
      {
        label: 'Nova movimentação',
        icon: LayersPlus,
        onClick: () => {
          console.log('Nova movimentação')
        },
      },
    ],
    [handleNewProductModalOpen]
  )

  return (
    <div className="flex h-screen bg-estoquei-bg">
      <ProductModal open={isNewProductModalOpen} onClose={handleNewProductModalClose} />
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
