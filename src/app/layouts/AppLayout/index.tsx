import MobileFooter from '@/shared/components/layout/MobileFooter'
import SideBar from '@/shared/components/layout/SideBar'
import { LayersPlus, PackagePlus } from 'lucide-react'
import { Outlet } from 'react-router'

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

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-estoquei-bg">
      <SideBar items={MENU_ITEMS} />
      <MobileFooter items={MENU_ITEMS} />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
