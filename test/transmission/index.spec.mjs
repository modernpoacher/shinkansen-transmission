import {
  expect
} from 'chai'

import {
  common,
  fromDocumentToHash,
  fromHashToDocument,
  toZashiki
} from '#transmission/transmission'

describe('#transmission/transmission', () => {
  describe('`common`', () => {
    it('is an object', () => {
      expect(common)
        .to.be.an('object')
    })
  })

  describe('`fromDocumentToHash`', () => {
    it('is a function', () => {
      expect(fromDocumentToHash)
        .to.be.a('function')
    })
  })

  describe('`fromHashToDocument`', () => {
    it('is a function', () => {
      expect(fromHashToDocument)
        .to.be.a('function')
    })
  })

  describe('`toZashiki`', () => {
    it('is a function', () => {
      expect(toZashiki)
        .to.be.a('function')
    })
  })
})
