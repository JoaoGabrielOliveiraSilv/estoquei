export interface IProductStatsProps {
  total: {
    quantity: number
    quantityProducts: number
  }
  lowStock: {
    quantity: number
    limit: number
  }
  outOfStockQuantity: number
}
