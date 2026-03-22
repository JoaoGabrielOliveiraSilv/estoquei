import { LayersPlus } from 'lucide-react'

import { ProductCard } from '..'

// Table skeleton for the product list page.
export default function ProdutoTabela() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Lista de produtos</h1>

      <ProductCard
        icon={<LayersPlus size={16} className="text-estoquei-accent" />}
        title="Produto 1"
        description="Descrição do produto 1"
        quantity={10}
        status="normal"
      />
      <ProductCard
        icon={<LayersPlus size={16} className="text-estoquei-accent" />}
        title="Produto 1"
        description="Descrição do produto 1"
        quantity={10}
        status="warning"
      />
      <ProductCard
        icon={<LayersPlus size={16} className="text-estoquei-accent" />}
        title="Produto 1"
        description="Descrição do produto 1"
        quantity={10}
        status="danger"
      />
    </main>
  )
}
