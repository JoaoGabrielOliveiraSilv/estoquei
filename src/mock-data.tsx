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
  {
    id: "4",
    icon: <LayersPlus size={16} className="text-estoquei-accent" />,
    name: "Produto 4",
    description: "Descrição do produto 4",
    quantity: 40,
    status: "normal" as const,
  },
  {
    id: "5",
    icon: <LayersPlus size={16} className="text-estoquei-accent" />,
    name: "Produto 5",
    description: "Descrição do produto 5",
    quantity: 50,
    status: "normal" as const,
  },
  {
    id: "6",
    icon: <LayersPlus size={16} className="text-estoquei-accent" />,
    name: "Produto 6",
    description: "Descrição do produto 6",
    quantity: 60,
    status: "normal" as const,
  },
  {
    id: "7",
    icon: <LayersPlus size={16} className="text-estoquei-accent" />,
    name: "Produto 7",
    description: "Descrição do produto 7",
    quantity: 70,
    status: "normal" as const,
  },
  {
    id: "8",
    icon: <LayersPlus size={16} className="text-estoquei-accent" />,
    name: "Produto 8",
    description: "Descrição do produto 8",
    quantity: 80,
    status: "normal" as const,
  },
  {
    id: "9",
    icon: <LayersPlus size={16} className="text-estoquei-accent" />,
    name: "Produto 9",
    description: "Descrição do produto 9",
    quantity: 90,
    status: "normal" as const,
  },
  {
    id: "10",
    icon: <LayersPlus size={16} className="text-estoquei-accent" />,
    name: "Produto 10",
    description: "Descrição do produto 10",
    quantity: 100,
    status: "normal" as const,
  },
]