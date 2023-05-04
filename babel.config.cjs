const debug = require('debug')

const log = debug('shinkansen-transmission')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`shinkansen` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env', {
      targets: {
        node: 'current',
        browsers: [
          'last 4 versions',
          'safari >= 9',
          'ios >= 8',
          'ie >= 9',
          '> 2%'
        ]
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ]
]

const plugins = [
  '@babel/proposal-export-default-from',
  '@babel/proposal-export-namespace-from',
  [
    'module-resolver', {
      alias: {
        'shinkansen-transmission/transmission/common': './src/transmission/common/index.mjs',
        'shinkansen-transmission/transmission/from-document-to-hash': './src/transmission/from-document-to-hash/index.mjs',
        'shinkansen-transmission/transmission/from-hash-to-document': './src/transmission/from-hash-to-document/index.mjs',
        'shinkansen-transmission/transmission/to-zashiki/transform-root-schema': './src/transmission/to-zashiki/transform-root-schema.mjs',
        'shinkansen-transmission/transmission/to-zashiki/transform-schema': './src/transmission/to-zashiki/transform-schema.mjs',
        'shinkansen-transmission/transmission/to-zashiki': './src/transmission/to-zashiki/index.mjs',
        'shinkansen-transmission/transmission': './src/transmission/index.mjs',
        'shinkansen-transmission': './src/index.cjs'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins
  }
}
