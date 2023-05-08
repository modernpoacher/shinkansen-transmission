import debug from 'debug'

import { expect } from 'chai'

import trasnformBooleanSchema from 'shinkansen-transmission/transmission/from-document-to-hash'

describe('shinkansen-transmission/transmission/from-document-to-hash/boolean', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(trasnformBooleanSchema)
      .to.be.a('function')
  })

  describe('Document is defined', () => {
    describe('Transforming `boolean` type schemas', () => {
      it('transforms `boolean` type schemas with `enum`', () => {
        const document = false

        const schema = { type: 'boolean', enum: [true, false] }

        const values = {
          '#/': '1'
        }

        return expect(trasnformBooleanSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `boolean` type schemas with `anyOf`', () => {
        const document = false

        const schema = { type: 'boolean', anyOf: [true, false] }

        const values = {
          '#/': '1'
        }

        return expect(trasnformBooleanSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `boolean` type schemas with `oneOf`', () => {
        const document = false

        const schema = { type: 'boolean', oneOf: [true, false] }

        const values = {
          '#/': '1'
        }

        return expect(trasnformBooleanSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `boolean` type schemas', () => {
        const document = true

        const schema = { type: 'boolean' }

        const values = {
          '#/': 'true'
        }

        return expect(trasnformBooleanSchema(document, schema))
          .to.eql(values)
      })
    })
  })

  describe('Document is undefined', () => {
    it('transforms', () => expect(trasnformBooleanSchema()).to.eql({ '#/': '' }))
  })
})
