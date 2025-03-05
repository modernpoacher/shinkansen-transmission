const {
  expect // @ts-expect-error
} = require('chai')

const {
  common,
  fromDocumentToHash,
  fromHashToDocument,
  toZashiki
} = require('#transmission')

describe('#transmission', () => {
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
