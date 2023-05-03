import debug from 'debug'

import { expect } from 'chai'

import transform from '#transmission/to-zashiki/transform-root-schema'

describe('#transmission/to-zashiki/transform-root-schema', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(transform)
      .to.be.a('function')
  })
})
