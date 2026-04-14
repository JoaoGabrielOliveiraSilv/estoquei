import { LogOut, PackagePlus } from 'lucide-react'
import { useCallback, useMemo } from 'react'
import { Outlet, useNavigate } from 'react-router'

import { useProductModal } from '@/features/produtos'
import MobileFooter from '@/shared/components/layout/MobileFooter'
import SideBar from '@/shared/components/layout/SideBar'
import { clearToken } from '@/shared/utils/auth'

import type { IAppLayoutProps } from './types'

export function AppLayout({ headerTitle: _headerTitle }: IAppLayoutProps) {
  const { open: openProductModal } = useProductModal()
  const navigate = useNavigate()

  const handleNewProductModalOpen = useCallback(() => {
    openProductModal()
  }, [openProductModal])

  const handleLogout = useCallback(() => {
    clearToken()
    navigate('/login', { replace: true })
  }, [navigate])

  const MENU_ITEMS = useMemo(
    () => [
      {
        label: 'Novo Produto',
        icon: PackagePlus,
        onClick: handleNewProductModalOpen,
      },
      {
        label: 'Sair',
        icon: LogOut,
        onClick: handleLogout,
      },
    ],
    [handleNewProductModalOpen, handleLogout]
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
