import globals from 'globals'
// @ts-ignore
import standard from '@sequencemedia/eslint-config-standard/configs/recommended/merge'
// @ts-ignore
import typescript from '@sequencemedia/eslint-config-typescript/configs/recommended/merge'

export default [
  {
    ignores: [
      'coverage'
    ]
  },
  /**
   *  Standard config
   */
  standard({
    files: [
      '**/*.{mjs,cjs,mts,cts}'
    ],
    ignores: [
      'src',
      'test'
    ],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }),
  standard({
    files: [
      'src/**/*.{mjs,cjs,mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }),
  standard({
    files: [
      'test/**/*.{mjs,cjs,mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  }),
  /**
   *  TypeScript config
   */
  typescript({
    files: [
      '**/*.{mts,cts}'
    ],
    ignores: [
      'src',
      'test'
    ],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }),
  typescript({
    files: [
      'src/**/*.{mts,cts}',
      'test/**/*.{mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        TransmissionTypes: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/max-params': ['error', { max: 5 }]
    }
  }),
  {
    files: [
      'src/**/*.d.{mts,cts}'
    ],
    rules: {
      'no-redeclare': 'off'
    }
  }
]
