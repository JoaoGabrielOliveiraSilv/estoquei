/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_JWT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
