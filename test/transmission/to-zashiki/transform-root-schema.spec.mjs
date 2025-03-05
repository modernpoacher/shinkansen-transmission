import {
  expect
} from 'chai'

import transform from '#transmission/transmission/to-zashiki/transform-root-schema'

describe('#transmission/transmission/to-zashiki/transform-root-schema', () => {
  it('is a function', () => {
    expect(transform)
      .to.be.a('function')
  })
})
