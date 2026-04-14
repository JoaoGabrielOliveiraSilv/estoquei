# estoquei

Sistema de controle de estoque com gerenciamento de produtos e movimentações de inventário.

**Deploy:** frontend no [Vercel](https://vercel.com)

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 8 |
| Estilização | Tailwind CSS 3 |
| Roteamento | React Router DOM 6 |
| Requisições | Axios |
| Cache de dados | TanStack Query (React Query) 5 |
| Estado global | Zustand 5 |
| Variantes de componentes | Class Variance Authority (CVA) |
| Ícones | Lucide React |
| Testes | Vitest + React Testing Library |
| Linting | ESLint + TypeScript ESLint |
| Formatação | Prettier |

---

## Arquitetura de pastas

O projeto segue uma arquitetura inspirada em **Feature-Sliced Design (FSD)**, onde o código é organizado por camadas com regras explícitas de dependência entre elas.

```
src/
├── app/                        # Camada de aplicação
│   ├── components/             # Componentes de infraestrutura (ex: ProtectedRoute)
│   ├── layouts/                # Layouts de página (AppLayout)
│   ├── pages/                  # Páginas de nível de app (composição de features)
│   ├── providers/              # Providers globais (QueryClient, Router)
│   ├── router/                 # Definição de rotas
│   ├── App.tsx
│   └── GlobalModals.tsx        # Modais montados no shell da aplicação
│
├── features/                   # Domínios de negócio isolados
│   ├── auth/                   # Autenticação
│   │   ├── pages/LoginPage/
│   │   └── index.ts            # Barreira pública da feature
│   ├── produtos/               # Catálogo e gerenciamento de produtos
│   │   ├── components/         # ProductCard, ProductModal, ProductStats, ProductTable
│   │   ├── hooks/
│   │   ├── pages/ProductCatalogView/
│   │   ├── store/              # Estado Zustand da feature
│   │   ├── utils/
│   │   └── index.ts
│   └── inventory-movements/    # Movimentações de estoque
│       ├── components/         # HistoryMovementsModal, NewInventoryMovementsModal
│       ├── hooks/
│       ├── store/
│       └── index.ts
│
├── shared/                     # Código reutilizável sem domínio de negócio
│   ├── api/                    # Cliente HTTP e módulos de API por recurso
│   │   ├── client.ts           # Instância Axios com interceptors
│   │   ├── auth-api.ts
│   │   ├── products-api.ts
│   │   ├── movements-api.ts
│   │   ├── types.ts
│   │   └── errors.ts
│   ├── components/
│   │   ├── layout/             # SideBar, MobileFooter, PageHeader
│   │   └── ui/                 # Button, Input, Modal, Textarea, UploadImage...
│   ├── types/                  # Tipos de domínio (Product, InventoryMovement)
│   └── utils/                  # cn, auth (token), map-api-product
│
└── test/
    └── setup.ts                # Configuração global do Vitest + jest-dom
```

---

## Regras de dependência entre camadas

As fronteiras entre camadas são **enforçadas pelo ESLint** via `import/no-restricted-paths`. Violações causam erro de lint.

```
app  →  features (apenas via index.ts da feature)
app  →  shared
features  →  shared
shared  →  (nenhuma camada acima)
features  ↛  outras features (sem acoplamento cruzado)
features  ↛  app
```

**Consequência prática:** cada feature exporta uma API pública via `index.ts`. A camada `app` importa apenas dessa barreira, nunca diretamente de `features/*/pages/**` ou `features/*/components/**`.

## Variáveis de ambiente

Crie um arquivo `.env` na raiz com base no `.env.example`:

```env
VITE_API_URL=http://localhost:3333
```

| Variável | Descrição |
|---|---|
| `VITE_API_URL` | URL base da API do backend |

---

## Rodando localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## Testes

Os testes ficam colocalizados com o código-fonte (`*.test.ts` / `*.test.tsx`).

```bash
# Rodar uma vez
npm test

# Modo watch
npm run test:watch
```

Tipos de teste aplicados:

- **Unitários** — funções puras de utils e módulos de API
- **Componente** — renderização, interação do usuário e estados (loading, erro, sucesso) com RTL

---

## Qualidade de código

```bash
# Lint
npm run lint
```

Configurações aplicadas:

- **TypeScript strict** — `noUnusedLocals`, `noUnusedParameters`, `strict: true`
- **ESLint** — TypeScript ESLint + React Hooks + regras de ordenação e restrição de imports
- **Prettier** — sem ponto-e-vírgula, aspas simples, trailing comma ES5, largura de 100 caracteres

---

## Integração contínua

O workflow `.github/workflows/ci.yml` executa em todo push e pull request para `main`:

1. `npm run lint`
2. `npm test`
3. `npm run build`

---

## Acessibilidade

O projeto segue as diretrizes WCAG com:

- Landmarks semânticos (`<main>`, `<nav>`)
- Atributos ARIA (`role`, `aria-label`, `aria-labelledby`, `aria-modal`, `aria-busy`, `aria-invalid`, `aria-describedby`)
- Gerenciamento de foco em modais via `focus-trap-react`
- Suporte a teclado (Escape fecha modais)
- Ícones decorativos marcados com `aria-hidden`
- Regiões de alerta com `role="alert"` para erros de formulário
