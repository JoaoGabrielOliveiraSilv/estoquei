// ESLint flat config file for TypeScript React code quality.
const js = require('@eslint/js')
const globals = require('globals')
const tseslint = require('typescript-eslint')
const reactHooks = require('eslint-plugin-react-hooks')
const reactRefresh = require('eslint-plugin-react-refresh')
const importPlugin = require('eslint-plugin-import')

module.exports = [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vitest,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      import: importPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.app.json'],
        },
      },
      'import/internal-regex':
        '^(@|@app|@pages|@widgets|@features|@entities|@shared)(/|$)',
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules,
      ...tseslint.configs.recommended[1].rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      ...reactHooks.configs.recommended.rules,
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'type',
          ],
          pathGroups: [
            { pattern: '@app/**', group: 'internal', position: 'before' },
            { pattern: '@pages/**', group: 'internal', position: 'before' },
            { pattern: '@widgets/**', group: 'internal', position: 'before' },
            { pattern: '@features/**', group: 'internal', position: 'before' },
            { pattern: '@entities/**', group: 'internal', position: 'before' },
            { pattern: '@shared/**', group: 'internal', position: 'before' },
            { pattern: '@/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      // import/no-restricted-paths (eslint-plugin-import): `target` = current file glob;
      // `from` = glob of resolved import paths that must not be imported from those files.
      // shared is leaf; features must not import app; cross-feature only via sibling index.ts or inventory-movements/hooks.
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/shared/**/*',
              from: './src/features/**/*',
            },
            {
              target: './src/shared/**/*',
              from: './src/app/**/*',
            },
            {
              target: './src/features/**/*',
              from: './src/app/**/*',
            },
            {
              target: './src/features/produtos/**/*',
              from: './src/features/inventory-movements/components/**/*',
            },
            {
              target: './src/features/produtos/**/*',
              from: './src/features/inventory-movements/store/**/*',
            },
            {
              target: './src/features/inventory-movements/**/*',
              from: './src/features/produtos/components/**/*',
            },
            {
              target: './src/features/inventory-movements/**/*',
              from: './src/features/produtos/store/**/*',
            },
            {
              target: './src/features/inventory-movements/**/*',
              from: './src/features/produtos/pages/**/*',
            },
            {
              target: './src/features/inventory-movements/**/*',
              from: './src/features/produtos/hooks/**/*',
            },
            {
              target: './src/app/**/*',
              from: './src/features/**/components/**/*',
            },
            {
              target: './src/app/**/*',
              from: './src/features/**/hooks/**/*',
            },
            {
              target: './src/app/**/*',
              from: './src/features/**/store/**/*',
            },
            {
              target: './src/app/**/*',
              from: './src/features/**/pages/**/*',
            },
          ],
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@/shared/components/ui/Modal/index',
                '@/shared/components/ui/Input/index',
                '@/shared/components/ui/Input/index.tsx',
                '@/shared/utils/cn.ts',
              ],
              message:
                'Use @/shared path without /index or extension (e.g. @/shared/components/ui/Modal, @/shared/utils/cn).',
            },
          ],
        },
      ],
    },
  },
]
