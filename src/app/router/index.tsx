// Application route declarations with basic fallback page.
import { Routes, Route } from 'react-router-dom'

import ProductListPage from '@/features/produtos/pages/ProductList'

function NotFoundPage() {
  return <h1>Página não encontrada</h1>
}

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
