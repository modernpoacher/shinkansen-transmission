import debug from 'debug'

import { expect } from 'chai'

import transform from '#transmission/to-zashiki/transform-root-schema'

describe('#transmission/to-zashiki/transform-root-schema', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('With values', () => {
    describe('Without params', () => {
      describe('Transforming `null` type schemas', () => {
        it('transforms `null` type schemas with `enum`', () => {
          const schema = {
            type: 'null',
            enum: [
              null
            ]
          }

          const values = {
            '#/': '0'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
                items: [
                  null
                ],
                selectedItems: [0]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    null
                  ],
                  selectedItems: [0]
                }
              }
            })
        })

        it('transforms `null` type schemas with `anyOf`', () => {
          const schema = {
            type: 'null',
            anyOf: [
              { const: null }
            ]
          }

          const values = {
            '#/': '0'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
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
                selectedItems: [0]
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: schema,
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
                  selectedItems: [0]
                }
              }
            })
        })

        it('transforms `null` type schemas with `oneOf`', () => {
          const schema = {
            type: 'null',
            oneOf: [
              { const: null }
            ]
          }

          const values = {
            '#/': '0'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
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
                selectedItems: [0]
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: schema,
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
                  selectedItems: [0]
                }
              }
            })
        })

        it('transforms `null` type schemas with `allOf`', () => {
          const schema = {
            type: 'null',
            allOf: [
              { const: null }
            ]
          }

          const values = {
            '#/': 'null'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'null',
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

        it('transforms `null` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = { type: 'null' }

          const values = {
            '#/': 'null'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'null',
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
