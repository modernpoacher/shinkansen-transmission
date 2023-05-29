import debug from 'debug'

import { expect } from 'chai'

import transformStringSchema from 'shinkansen-transmission/transmission/from-document-to-hash'

describe('shinkansen-transmission/transmission/from-document-to-hash/string', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(transformStringSchema)
      .to.be.a('function')
  })

  describe('Document is defined', () => {
    describe('Transforming `string` type schemas', () => {
      it('transforms `string` type schemas with `enum`', () => {
        const document = 'mock string (2)'

        const schema = {
          type: 'string',
          enum: [
            'mock string (1)',
            'mock string (2)'
          ]
        }

        const values = {
          '#/': '1'
        }

        return expect(transformStringSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `string` type schemas with `anyOf`', () => {
        const document = 'mock array type index string (2)'

        const schema = {
          type: 'string',
          anyOf: [
            { const: 'mock array type index string (1)' },
            { const: 'mock array type index string (2)' },
            { const: 'mock array type index string (3)' }
          ]
        }

        const values = {
          '#/': '1'
        }

        return expect(transformStringSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `string` type schemas with `oneOf`', () => {
        const document = 'mock array type index string (2)'

        const schema = {
          type: 'string',
          oneOf: [
            { const: 'mock array type index string (1)' },
            { const: 'mock array type index string (2)' },
            { const: 'mock array type index string (3)' }
          ]
        }

        const values = {
          '#/': '1'
        }

        return expect(transformStringSchema(document, schema))
          .to.eql(values)
      })

      it('transforms `string` type schemas', () => {
        const document = 'mock string'

        const schema = { type: 'string' }

        const values = {
          '#/': 'mock string'
        }

        return expect(transformStringSchema(document, schema))
          .to.eql(values)
      })
    })
  })

  describe('Document is undefined', () => {
    it('transforms', () => expect(transformStringSchema()).to.eql({ '#/': '' }))
  })
})
