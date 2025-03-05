/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 */

import {
  expect
} from 'chai'

import transform from '#transmission/transmission/to-zashiki/transform-schema'

describe('#transmission/transmission/to-zashiki/transform-schema', () => {
  describe('With values', () => {
    describe('Without params', () => {
      /**
       *  Null
       */
      describe('Transforming `null` type schemas', () => {
        it('transforms `null` type schemas with `enum`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'null',
            enum: [
              null
            ]
          }

          const rootSchema = undefined

          const values = {
            '#/': '0'
          }

          return expect(transform(schema, rootSchema, values))
            .to.eql({
              meta: {
                type: 'null',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  null
                ],
                selectedItems: [
                  0
                ]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    null
                  ],
                  selectedItems: [
                    0
                  ]
                }
              }
            })
        })

        it('transforms `null` type schemas with `anyOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'null',
            anyOf: [
              { const: null }
            ]
          }

          const rootSchema = undefined

          const values = {
            '#/': '0'
          }

          return expect(transform(schema, rootSchema, values))
            .to.eql({
              meta: {
                type: 'null',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: {},
                      schema: {
                        const: null
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      value: 'null'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        value: 'null'
                      }
                    }
                  }
                ],
                selectedItems: [
                  0
                ]
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: {},
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/0',
                          value: 'null'
                        }
                      }
                    }
                  ],
                  selectedItems: [
                    0
                  ]
                }
              }
            })
        })

        it('transforms `null` type schemas with `oneOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'null',
            oneOf: [
              { const: null }
            ]
          }

          const rootSchema = undefined

          const values = {
            '#/': '0'
          }

          return expect(transform(schema, rootSchema, values))
            .to.eql({
              meta: {
                type: 'null',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: {},
                      schema: {
                        const: null
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      value: 'null'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        value: 'null'
                      }
                    }
                  }
                ],
                selectedItems: [
                  0
                ]
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: {},
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/0',
                          value: 'null'
                        }
                      }
                    }
                  ],
                  selectedItems: [
                    0
                  ]
                }
              }
            })
        })

        it('transforms `null` type schemas with `allOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'null',
            allOf: [
              { const: null }
            ]
          }

          const rootSchema = undefined

          const values = {
            '#/': 'null'
          }

          return expect(transform(schema, rootSchema, values))
            .to.eql({
              meta: {
                type: 'null',
                rootSchema: {},
                schema,
                uri: '#/',
                value: 'null'
              },
              elements: {
                field: {
                  id: '#/',
                  value: 'null'
                }
              }
            })
        })

        it('transforms `null` type schemas', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = { type: 'null' }

          const rootSchema = undefined

          const values = {
            '#/': 'null'
          }

          return expect(transform(schema, rootSchema, values))
            .to.eql({
              meta: {
                type: 'null',
                rootSchema: {},
                schema,
                uri: '#/',
                value: 'null'
              },
              elements: {
                field: {
                  id: '#/',
                  value: 'null'
                }
              }
            })
        })
      })
    })
  })
})
