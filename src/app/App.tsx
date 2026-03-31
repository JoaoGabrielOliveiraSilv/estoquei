// Root app component that renders application routes.
import { GlobalModals } from './GlobalModals'
import { AppRouter } from './router'

export function App() {
  return (
    <>
      <GlobalModals />
      <AppRouter />
    </>
  )
}
