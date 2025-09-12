import {
  expect
} from 'chai'

import {
  common,
  fromDocumentToHash,
  fromHashToDocument,
  toZashiki
} from '#transmission'

describe('#transmission', () => {
  describe('`common`', () => {
    it('is an object', () => {
      expect(common)
        .to.be.a('module') // an('object')
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
