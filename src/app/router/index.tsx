// Application route declarations with basic fallback page.
import { Routes, Route } from 'react-router-dom'

import { ProductListPage } from '@/features/produtos'

import { AppLayout } from '../layouts/AppLayout'

function NotFoundPage() {
  return <h1>Página não encontrada</h1>
}

const ROUTES = [
  {
    path: '/',
    headerTitle: 'Produtos',
    element: <ProductListPage />,
  },
]

export function AppRouter() {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={<AppLayout headerTitle={route.headerTitle} />}>
          <Route index element={route.element} />
        </Route>
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
