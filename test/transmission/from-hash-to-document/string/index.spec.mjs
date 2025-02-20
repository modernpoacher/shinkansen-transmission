/**
 *  @typedef {TransmissionTypes.ArrayLiteralType} ArrayLiteralType
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import debug from 'debug'

import {
  expect
} from 'chai'

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
    describe('Hash has values', () => {
      describe('Transforming `string` type schemas', () => {
        it('transforms `string` type schemas with `enum`', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'string',
            enum: [
              'string (1)',
              'string (2)',
              'string (3)'
            ]
          }

          const document = 'string (2)'

          return expect(transformStringSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas with `anyOf`', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'string',
            anyOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const document = 'string (2)'

          return expect(transformStringSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas with `oneOf`', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'string',
            oneOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const document = 'string (2)'

          return expect(transformStringSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas', () => {
          const hash = {
            '#/': 'mock string'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = { type: 'string' }

          const document = 'mock string'

          return expect(transformStringSchema(hash, schema))
            .to.eql(document)
        })
      })
    })

    describe('Hash does not have values', () => {
      describe('Transforming `string` type schemas', () => {
        it('transforms `string` type schemas with `enum`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'string',
            enum: [
              'string (1)',
              'string (2)',
              'string (3)'
            ]
          }

          const document = undefined

          return expect(transformStringSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas with `anyOf`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'string',
            anyOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const document = undefined

          return expect(transformStringSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas with `oneOf`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'string',
            oneOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const document = undefined

          return expect(transformStringSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `string` type schemas', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = { type: 'string' }

          const document = undefined

          return expect(transformStringSchema(hash, schema))
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
