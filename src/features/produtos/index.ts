// Public exports for the produtos feature boundary (consumers: app, other features).
export { default as ProductCard } from './components/ProductCard'
export { default as ProductModal } from './components/ProductModal'
export { default as ProductStats } from './components/ProductStats'
export { default as ProductTable } from './components/ProductTable'
export { default as ProductCatalogView } from './pages/ProductCatalogView'
export { useProductModal } from './hooks'
export { useProductModalStore } from './store/product-modal.store'
