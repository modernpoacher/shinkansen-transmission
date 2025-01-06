import debug from 'debug'

import {
  expect
} from 'chai'

import transformNullSchema from 'shinkansen-transmission/transmission/from-hash-to-document/null'

describe('shinkansen-transmission/transmission/from-hash-to-document/null', () => {
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

  describe('Hash is defined and schema is defined', () => {
    describe('With values', () => {
      describe('Transforming `null` type schemas', () => {
        it('transforms `null` type schemas with `enum`', () => {
          const values = {
            '#/': '0'
          }

          const schema = {
            type: 'null',
            enum: [
              null,
              null
            ]
          }

          const document = null

          return expect(transformNullSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `null` type schemas with `anyOf`', () => {
          const values = {
            '#/': '0'
          }

          const schema = {
            type: 'null',
            anyOf: [
              { const: null },
              { const: null }
            ]
          }

          const document = null

          return expect(transformNullSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `null` type schemas with `oneOf`', () => {
          const values = {
            '#/': '0'
          }

          const schema = {
            type: 'null',
            oneOf: [
              { const: null },
              { const: null }
            ]
          }

          const document = null

          return expect(transformNullSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `null` type schemas', () => {
          const values = {
            '#/': 'null'
          }

          const schema = { type: 'null' }

          const document = null

          return expect(transformNullSchema(values, schema))
            .to.eql(document)
        })
      })
    })

    describe('Without values', () => {
      describe('Transforming `null` type schemas', () => {
        it('transforms `null` type schemas with `enum`', () => {
          const values = {}

          const schema = {
            type: 'null',
            enum: [
              null
            ]
          }

          const document = undefined

          return expect(transformNullSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `null` type schemas with `anyOf`', () => {
          const values = {}

          const schema = {
            type: 'null',
            anyOf: [
              { const: null }
            ]
          }

          const document = undefined

          return expect(transformNullSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `null` type schemas with `oneOf`', () => {
          const values = {}

          const schema = {
            type: 'null',
            oneOf: [
              { const: null }
            ]
          }

          const document = undefined

          return expect(transformNullSchema(values, schema))
            .to.equal(document)
        })

        it('transforms `null` type schemas', () => {
          const values = {}

          const schema = { type: 'null' }

          const document = undefined

          return expect(transformNullSchema(values, schema))
            .to.eql(document)
        })
      })
    })
  })

  describe('Hash is undefined and schema is defined', () => {
    it('transforms `null` type schemas', () => expect(transformNullSchema(undefined, { type: 'null' })).to.eql(undefined))
  })

  describe('Hash is defined and schema is undefined', () => {
    it('throws', () => expect(() => transformNullSchema({})).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })

  describe('Hash is undefined and schema is undefined', () => {
    it('throws', () => expect(() => transformNullSchema()).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })
})
