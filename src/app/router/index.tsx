// Application route declarations with basic fallback page.
import { Routes, Route } from 'react-router-dom'

import ProductCatalogPage from '@/app/pages/ProductCatalogPage'
import { LoginPage } from '@/features/auth'

import { ProtectedRoute } from '../components/ProtectedRoute'
import { AppLayout } from '../layouts/AppLayout'

function NotFoundPage() {
  return <h1>Página não encontrada</h1>
}

const ROUTES = [
  {
    path: '/',
    headerTitle: 'Produtos',
    element: <ProductCatalogPage />,
  },
]

export function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={<AppLayout headerTitle={route.headerTitle} />}>
            <Route index element={route.element} />
          </Route>
        ))}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
