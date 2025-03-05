/**
 *  @typedef {TransmissionTypes.ArrayLiteralType} ArrayLiteralType
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import {
  expect
} from 'chai'

import transformBooleanSchema from '#transmission/transmission/from-hash-to-document/boolean'

describe('#transmission/transmission/from-hash-to-document/boolean', () => {
  it('is a function', () => {
    expect(transformBooleanSchema)
      .to.be.a('function')
  })

  describe('Hash is defined and schema is defined', () => {
    describe('Hash has values', () => {
      describe('Transforming `boolean` type schemas', () => {
        it('transforms `boolean` type schemas with `enum`', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'boolean',
            enum: [
              true,
              false
            ]
          }

          const document = false

          return expect(transformBooleanSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas with `anyOf`', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'boolean',
            anyOf: [
              { const: true },
              { const: false }
            ]
          }

          const document = false

          return expect(transformBooleanSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas with `oneOf`', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'boolean',
            oneOf: [
              { const: true },
              { const: false }
            ]
          }

          const document = false

          return expect(transformBooleanSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas', () => {
          const hash = {
            '#/': 'true'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = { type: 'boolean' }

          const document = true

          return expect(transformBooleanSchema(hash, schema))
            .to.eql(document)
        })
      })
    })

    describe('Hash does not have values', () => {
      describe('Transforming `boolean` type schemas', () => {
        it('transforms `boolean` type schemas with `enum`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'boolean',
            enum: [
              true,
              false
            ]
          }

          const document = undefined

          return expect(transformBooleanSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas with `anyOf`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'boolean',
            anyOf: [
              { const: true },
              { const: false }
            ]
          }

          const document = undefined

          return expect(transformBooleanSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas with `oneOf`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'boolean',
            oneOf: [
              { const: true },
              { const: false }
            ]
          }

          const document = undefined

          return expect(transformBooleanSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = { type: 'boolean' }

          const document = undefined

          return expect(transformBooleanSchema(hash, schema))
            .to.eql(document)
        })
      })
    })
  })

  describe('Hash is undefined and schema is defined', () => {
    it('transforms `boolean` type schemas', () => expect(transformBooleanSchema(undefined, { type: 'boolean' })).to.eql(undefined))
  })

  describe('Hash is defined and schema is undefined', () => {
    it('throws', () => expect(() => transformBooleanSchema({})).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })

  describe('Hash is undefined and schema is undefined', () => {
    it('throws', () => expect(() => transformBooleanSchema()).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })
})
