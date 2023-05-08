import debug from 'debug'

import { expect } from 'chai'

import transformBooleanSchema from 'shinkansen-transmission/transmission/from-hash-to-document/boolean'

describe('shinkansen-transmission/transmission/from-hash-to-document/boolean', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(transformBooleanSchema)
      .to.be.a('function')
  })

  describe('Hash is defined and schema is defined', () => {
    describe('With values', () => {
      describe('Transforming `boolean` type schemas', () => {
        it('transforms `boolean` type schemas with `enum`', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'boolean',
            enum: [
              true,
              false
            ]
          }

          const document = false

          return expect(transformBooleanSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas with `anyOf`', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'boolean',
            anyOf: [
              { const: true },
              { const: false }
            ]
          }

          const document = false

          return expect(transformBooleanSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas with `oneOf`', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'boolean',
            oneOf: [
              { const: true },
              { const: false }
            ]
          }

          const document = false

          return expect(transformBooleanSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas', () => {
          const values = {
            '#/': 'true'
          }

          const schema = { type: 'boolean' }

          const document = true

          return expect(transformBooleanSchema(values, schema))
            .to.eql(document)
        })
      })
    })

    describe('Without values', () => {
      describe('Transforming `boolean` type schemas', () => {
        it('transforms `boolean` type schemas with `enum`', () => {
          const values = {}

          const schema = {
            type: 'boolean',
            enum: [
              true,
              false
            ]
          }

          const document = undefined

          return expect(transformBooleanSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas with `anyOf`', () => {
          const values = {}

          const schema = {
            type: 'boolean',
            anyOf: [
              { const: true },
              { const: false }
            ]
          }

          const document = undefined

          return expect(transformBooleanSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas with `oneOf`', () => {
          const values = {}

          const schema = {
            type: 'boolean',
            oneOf: [
              { const: true },
              { const: false }
            ]
          }

          const document = undefined

          return expect(transformBooleanSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `boolean` type schemas', () => {
          const values = {}

          const schema = { type: 'boolean' }

          const document = undefined

          return expect(transformBooleanSchema(values, schema))
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
