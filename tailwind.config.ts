// Tailwind content paths for the Fluxo frontend source files.
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'estoquei-bg': '#0e0f11',
        'estoquei-bg2': '#16181c',
        'estoquei-bg3': '#1e2127',
        'estoquei-border': '#2a2d35',
        'estoquei-border2': '#383c47',
        'estoquei-text': '#e8eaf0',
        'estoquei-text2': '#8a8f9e',
        'estoquei-text3': '#555a68',
        'estoquei-accent':  '#e8f04a',
        'estoquei-accent2':  '#b8bf2f',
        'estoquei-green':  '#3ddc84',
        'estoquei-danger':  '#ff5c5c',
        'estoquei-warning':  '#ff9f43',
      },
      borderRadius: {
        md: '6px',
        lg: '12px',
      },
      spacing: {
        'bottom-nav': '64px',
      }
    },
  },
  plugins: [],
} satisfies Config
