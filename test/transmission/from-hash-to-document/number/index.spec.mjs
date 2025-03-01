/**
 *  @typedef {TransmissionTypes.ArrayLiteralType} ArrayLiteralType
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import {
  expect
} from 'chai'

import transformNumberSchema from 'shinkansen-transmission/transmission/from-hash-to-document/number'

describe('shinkansen-transmission/transmission/from-hash-to-document/number', () => {
  it('is a function', () => {
    expect(transformNumberSchema)
      .to.be.a('function')
  })

  describe('Hash is defined and schema is defined', () => {
    describe('Hash has values', () => {
      describe('Transforming `number` type schemas', () => {
        it('transforms `number` type schemas with `enum`', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'number',
            enum: [
              1,
              2,
              3
            ]
          }

          const document = 2

          return expect(transformNumberSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `number` type schemas with `anyOf`', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'number',
            anyOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const document = 2

          return expect(transformNumberSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `number` type schemas with `oneOf`', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'number',
            oneOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const document = 2

          return expect(transformNumberSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `number` type schemas', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = { type: 'number' }

          const document = 1

          return expect(transformNumberSchema(hash, schema))
            .to.eql(document)
        })
      })
    })

    describe('Hash does not have values', () => {
      describe('Transforming `number` type schemas', () => {
        it('transforms `number` type schemas with `enum`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'number',
            enum: [
              1,
              2,
              3
            ]
          }

          const document = undefined

          return expect(transformNumberSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `number` type schemas with `anyOf`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'number',
            anyOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const document = undefined

          return expect(transformNumberSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `number` type schemas with `oneOf`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'number',
            oneOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const document = undefined

          return expect(transformNumberSchema(hash, schema))
            .to.equal(document)
        })

        it('transforms `number` type schemas', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = { type: 'number' }

          const document = undefined

          return expect(transformNumberSchema(hash, schema))
            .to.eql(document)
        })
      })
    })
  })

  describe('Hash is undefined and schema is defined', () => {
    it('transforms `number` type schemas', () => expect(transformNumberSchema(undefined, { type: 'number' })).to.eql(undefined))
  })

  describe('Hash is defined and schema is undefined', () => {
    it('throws', () => expect(() => transformNumberSchema({})).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })

  describe('Hash is undefined and schema is undefined', () => {
    it('throws', () => expect(() => transformNumberSchema()).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })
})
