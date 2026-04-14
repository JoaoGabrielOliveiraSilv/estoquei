import { PackagePlus } from 'lucide-react'
import { useCallback, useMemo } from 'react'
import { Outlet } from 'react-router'

import { useProductModal } from '@/features/produtos'
import MobileFooter from '@/shared/components/layout/MobileFooter'
import PageHeader from '@/shared/components/layout/PageHeader'
import SideBar from '@/shared/components/layout/SideBar'

import type { IAppLayoutProps } from './types'

export function AppLayout({ headerTitle }: IAppLayoutProps) {
  const { open: openProductModal } = useProductModal()

  const handleNewProductModalOpen = useCallback(() => {
    openProductModal()
  }, [openProductModal])

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
      <SideBar items={MENU_ITEMS} />
      <MobileFooter items={MENU_ITEMS} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
