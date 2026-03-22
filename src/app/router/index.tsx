// Application route declarations with basic fallback page.
import { Routes, Route } from 'react-router-dom'

import { ProdutoTabela } from '../../features/produtos'

function NotFoundPage() {
  return <h1>Página não encontrada</h1>
}

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProdutoTabela />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
