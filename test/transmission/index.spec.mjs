import {
  expect
} from 'chai'

import {
  common,
  fromDocumentToHash,
  fromHashToDocument,
  toZashiki
} from 'shinkansen-transmission'

describe('shinkansen-transmission', () => {
  describe('`common`', () => {
    it('is a module', () => {
      expect(common)
        .to.be.a('module')
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
