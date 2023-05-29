import debug from 'debug'

import { expect } from 'chai'

import transformNullSchema from 'shinkansen-transmission/transmission/from-document-to-hash'

describe('shinkansen-transmission/transmission/from-document-to-hash/null', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(transformNullSchema)
      .to.be.a('function')
  })

  describe('Document is defined', () => {
    describe('Transforming `null` type schemas', () => {
      it('transforms `null` type schemas with `enum`', () => {
        const document = null

        const schema = { type: 'null', enum: [null] }

        const values = {
          '#/': '0'
        }

        return expect(transformNullSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `null` type schemas with `anyOf`', () => {
        const document = null

        const schema = { type: 'null', anyOf: [null] }

        const values = {
          '#/': '0'
        }

        return expect(transformNullSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `null` type schemas with `oneOf`', () => {
        const document = null

        const schema = { type: 'null', oneOf: [null] }

        const values = {
          '#/': '0'
        }

        return expect(transformNullSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `null` type schemas', () => {
        const document = null

        const schema = { type: 'null' }

        const values = {
          '#/': 'null'
        }

        return expect(transformNullSchema(document, schema))
          .to.eql(values)
      })
    })
  })

  describe('Document is undefined', () => {
    it('transforms', () => expect(transformNullSchema()).to.eql({ '#/': '' }))
  })
})
