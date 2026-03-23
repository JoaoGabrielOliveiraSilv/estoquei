// Application route declarations with basic fallback page.
import { Routes, Route } from 'react-router-dom'

import ProductListPage from '@/features/produtos/pages/ProductList'
import { AppLayout } from '../layouts/AppLayout'

function NotFoundPage() {
  return <h1>Página não encontrada</h1>
}

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ProductListPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
