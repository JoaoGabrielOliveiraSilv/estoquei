import { LayersPlus } from "lucide-react";

export const mockProductStats = {
  total: {
    quantity: 100,
    quantityProducts: 10,
  },
  lowStock: {
    quantity: 10,
    limit: 20,
  },
  outOfStockQuantity: 30,
}

export const mockProducts = [
  {
    id: "1",
    icon: <LayersPlus size={16} className="text-estoquei-accent" />,
    name: "Produto 1",
    description: "Descrição do produto 1",
    quantity: 10,
    status: "normal" as const,
  },
  {
    id: "2",
    icon: <LayersPlus size={16} className="text-estoquei-accent" />,
    name: "Produto 2",
    description: "Descrição do produto 2",
    quantity: 20,
    status: "warning" as const,
  },
  {
    id: "3",
    icon: <LayersPlus size={16} className="text-estoquei-accent" />,
    name: "Produto 3",
    description: "Descrição do produto 3",
    quantity: 30,
    status: "danger" as const,
  },
]