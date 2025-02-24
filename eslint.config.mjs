import globals from 'globals'
import standard from '@sequencemedia/eslint-config-standard/configs/recommended/merge'
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
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      '@stylistic/object-curly-newline': [
        'error',
        {
          ImportDeclaration: 'always',
          ExportDeclaration: {
            multiline: true,
            minProperties: 2
          }
        }
      ]
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
    languageOptions: {
      globals: {
        ...globals.node,
        TransmissionTypes: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/max-params': [
        'error',
        {
          max: 5
        }
      ]
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
