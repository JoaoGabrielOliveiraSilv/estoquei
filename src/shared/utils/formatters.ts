// Utility formatters for presenting values in the UI.
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(iso))
}

export function formatQty(qty: number): string {
  return `${qty} un.`
}
