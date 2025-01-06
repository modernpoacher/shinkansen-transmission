import debug from 'debug'

import {
  expect
} from 'chai'

import transformNumberSchema from 'shinkansen-transmission/transmission/from-document-to-hash'

describe('shinkansen-transmission/transmission/from-document-to-hash/number', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(transformNumberSchema)
      .to.be.a('function')
  })

  describe('Document is defined', () => {
    describe('Transforming `number` type schemas', () => {
      it('transforms `number` type schemas with `enum`', () => {
        const document = 3

        const schema = {
          type: 'number',
          enum: [
            1,
            2,
            3
          ]
        }

        const values = {
          '#/': '2'
        }

        return expect(transformNumberSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `number` type schemas with `anyOf`', () => {
        const document = 3

        const schema = {
          type: 'number',
          anyOf: [
            { const: 1 },
            { const: 2 },
            { const: 3 }
          ]
        }

        const values = {
          '#/': '2'
        }

        return expect(transformNumberSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `number` type schemas with `oneOf`', () => {
        const document = 3

        const schema = {
          type: 'number',
          oneOf: [
            { const: 1 },
            { const: 2 },
            { const: 3 }
          ]
        }

        const values = {
          '#/': '2'
        }

        return expect(transformNumberSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `number` type schemas', () => {
        const document = 1

        const schema = { type: 'number' }

        const values = {
          '#/': '1'
        }

        return expect(transformNumberSchema(document, schema))
          .to.eql(values)
      })
    })
  })

  describe('Document is undefined', () => {
    it('transforms', () => expect(transformNumberSchema()).to.eql({ '#/': '' }))
  })
})
