import debug from 'debug'

import { expect } from 'chai'

import transformStringSchema from 'shinkansen-transmission/transmission/from-hash-to-document/string'

describe('shinkansen-transmission/transmission/from-hash-to-document/string', () => {
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

  describe('Hash is defined and schema is defined', () => {
    describe('With values', () => {
      describe('Transforming `string` type schemas', () => {
        it('transforms `string` type schemas with `enum`', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'string',
            enum: [
              'string (1)',
              'string (2)',
              'string (3)'
            ]
          }

          const document = 'string (2)'

          return expect(transformStringSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas with `anyOf`', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'string',
            anyOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const document = 'string (2)'

          return expect(transformStringSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas with `oneOf`', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'string',
            oneOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const document = 'string (2)'

          return expect(transformStringSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas', () => {
          const values = {
            '#/': 'mock string'
          }

          const schema = { type: 'string' }

          const document = 'mock string'

          return expect(transformStringSchema(values, schema))
            .to.eql(document)
        })
      })
    })

    describe('Without values', () => {
      describe('Transforming `string` type schemas', () => {
        it('transforms `string` type schemas with `enum`', () => {
          const values = {}

          const schema = {
            type: 'string',
            enum: [
              'string (1)',
              'string (2)',
              'string (3)'
            ]
          }

          const document = undefined

          return expect(transformStringSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas with `anyOf`', () => {
          const values = {}

          const schema = {
            type: 'string',
            anyOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const document = undefined

          return expect(transformStringSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas with `oneOf`', () => {
          const values = {}

          const schema = {
            type: 'string',
            oneOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const document = undefined

          return expect(transformStringSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas', () => {
          const values = {}

          const schema = { type: 'string' }

          const document = undefined

          return expect(transformStringSchema(values, schema))
            .to.eql(document)
        })
      })
    })
  })

  describe('Hash is undefined and schema is defined', () => {
    it('transforms `string` type schemas', () => expect(transformStringSchema(undefined, { type: 'string' })).to.eql(undefined))
  })

  describe('Hash is defined and schema is undefined', () => {
    it('throws', () => expect(() => transformStringSchema({})).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })

  describe('Hash is undefined and schema is undefined', () => {
    it('throws', () => expect(() => transformStringSchema()).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })
})
