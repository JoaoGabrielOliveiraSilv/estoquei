import MobileFooter from '@/shared/components/layout/MobileFooter'
import PageHeader from '@/shared/components/layout/PageHeader'
import SideBar from '@/shared/components/layout/SideBar'
import { LayersPlus, PackagePlus } from 'lucide-react'
import { Outlet } from 'react-router'
import type { IAppLayoutProps } from './types'

const MENU_ITEMS = [
  {
    label: 'Novo Produto',
    icon: PackagePlus,
    onClick: () => {
      console.log('Novo Produto')
    },
  },
  {
    label: 'Nova movimentação',
    icon: LayersPlus,
    onClick: () => {
      console.log('Nova movimentação')
    },
  },
]

export function AppLayout({ headerTitle }: IAppLayoutProps) {
  return (
    <div className="flex h-screen bg-estoquei-bg">
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
