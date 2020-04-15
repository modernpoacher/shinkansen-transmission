import debug from 'debug'

import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki'

describe('shinkansen-transmission/transmission/to-zashiki', () => {
  before(() => debug.enable('shinkansen-transmission:to-zashiki'))

  describe('Transforming `object` type schemas', () => {
    it('transforms `object` type schemas with `enum` (with an `object` type with `enum`)', () => {
      const schema = {
        type: 'object',
        enum: [
          {
            type: 'object',
            enum: [
              {},
              {},
              {}
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                {
                  type: 'object',
                  enum: [
                    {},
                    {},
                    {}
                  ]
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `enum` (with an `object` type with `anyOf`)', () => {
      const schema = {
        type: 'object',
        enum: [
          {
            type: 'object',
            anyOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                {
                  type: 'object',
                  anyOf: [
                    {
                      type: 'object'
                    }
                  ]
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `enum` (with an `object` type with `oneOf`)', () => {
      const schema = {
        type: 'object',
        enum: [
          {
            type: 'object',
            oneOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                {
                  type: 'object',
                  oneOf: [
                    {
                      type: 'object'
                    }
                  ]
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `enum` (with an `object` type with `allOf`)', () => {
      const schema = {
        type: 'object',
        enum: [
          {
            type: 'object',
            allOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                {
                  type: 'object',
                  allOf: [
                    {
                      type: 'object'
                    }
                  ]
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `anyOf` (with an `object` type with `enum`)', () => {
      const schema = {
        type: 'object',
        anyOf: [
          {
            type: 'object',
            enum: [
              {},
              {},
              {}
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            anyOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'object',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'object',
                      enum: [
                        {},
                        {},
                        {}
                      ]
                    },
                    selectedItems: [],
                    required: false
                  },
                  elements: {
                    enum: {
                      id: '#/0',
                      items: [
                        {},
                        {},
                        {}
                      ],
                      selectedItems: [],
                      required: false
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `anyOf` (with an `object` type with `anyOf`)', () => {
      const schema = {
        type: 'object',
        anyOf: [
          {
            type: 'object',
            anyOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            anyOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'object',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'object',
                      anyOf: [
                        {
                          type: 'object'
                        }
                      ]
                    },
                    selectedItems: [],
                    required: false
                  },
                  elements: {
                    anyOf: {
                      id: '#/0',
                      items: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            parentUri: '#/0',
                            uri: '#/0/0',
                            rootSchema: schema,
                            schema: {
                              type: 'object'
                            },
                            required: false
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      selectedItems: [],
                      required: false
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `anyOf` (with an `object` type with `oneOf`)', () => {
      const schema = {
        type: 'object',
        anyOf: [
          {
            type: 'object',
            oneOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            anyOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'object',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'object',
                      oneOf: [
                        {
                          type: 'object'
                        }
                      ]
                    },
                    selectedItems: [],
                    required: false
                  },
                  elements: {
                    oneOf: {
                      id: '#/0',
                      items: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            parentUri: '#/0',
                            uri: '#/0/0',
                            rootSchema: schema,
                            schema: {
                              type: 'object'
                            },
                            required: false
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      selectedItems: [],
                      required: false
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `anyOf` (with an `object` type with `allOf`)', () => {
      const schema = {
        type: 'object',
        anyOf: [
          {
            type: 'object',
            allOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            anyOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'object',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'object',
                      allOf: [
                        {
                          type: 'object'
                        }
                      ]
                    },
                    required: false
                  },
                  elements: {
                    fields: []
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `oneOf` (with an `object` type with `enum`)', () => {
      const schema = {
        type: 'object',
        oneOf: [
          {
            type: 'object',
            enum: [
              {},
              {},
              {}
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            oneOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'object',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'object',
                      enum: [
                        {},
                        {},
                        {}
                      ]
                    },
                    selectedItems: [],
                    required: false
                  },
                  elements: {
                    enum: {
                      id: '#/0',
                      items: [
                        {},
                        {},
                        {}
                      ],
                      selectedItems: [],
                      required: false
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `oneOf` (with an `object` type with `anyOf`)', () => {
      const schema = {
        type: 'object',
        oneOf: [
          {
            type: 'object',
            anyOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            oneOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'object',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'object',
                      anyOf: [
                        {
                          type: 'object'
                        }
                      ]
                    },
                    selectedItems: [],
                    required: false
                  },
                  elements: {
                    anyOf: {
                      id: '#/0',
                      items: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            parentUri: '#/0',
                            uri: '#/0/0',
                            rootSchema: schema,
                            schema: {
                              type: 'object'
                            },
                            required: false
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      selectedItems: [],
                      required: false
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `oneOf` (with an `object` type with `oneOf`)', () => {
      const schema = {
        type: 'object',
        oneOf: [
          {
            type: 'object',
            oneOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            oneOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'object',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'object',
                      oneOf: [
                        {
                          type: 'object'
                        }
                      ]
                    },
                    selectedItems: [],
                    required: false
                  },
                  elements: {
                    oneOf: {
                      id: '#/0',
                      items: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            parentUri: '#/0',
                            uri: '#/0/0',
                            rootSchema: schema,
                            schema: {
                              type: 'object'
                            },
                            required: false
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      selectedItems: [],
                      required: false
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `oneOf` (with an `object` type with `allOf`)', () => {
      const schema = {
        type: 'object',
        oneOf: [
          {
            type: 'object',
            allOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            oneOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'object',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'object',
                      allOf: [
                        {
                          type: 'object'
                        }
                      ]
                    },
                    required: false
                  },
                  elements: {
                    fields: []
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `allOf` (with an `object` type with `enum`)', () => {
      const schema = {
        type: 'object',
        allOf: [
          {
            type: 'object',
            enum: [
              {},
              {},
              {}
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema
          },
          elements: {
            fields: []
          }
        })
    })

    it('transforms `object` type schemas with `allOf` (with an `object` type with `anyOf`)', () => {
      const schema = {
        type: 'object',
        allOf: [
          {
            type: 'object',
            anyOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema
          },
          elements: {
            fields: []
          }
        })
    })

    it('transforms `object` type schemas with `allOf` (with an `object` type with `oneOf`)', () => {
      const schema = {
        type: 'object',
        allOf: [
          {
            type: 'object',
            oneOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema
          },
          elements: {
            fields: []
          }
        })
    })

    it('transforms `object` type schemas with `allOf` (with an `object` type with `allOf`)', () => {
      const schema = {
        type: 'object',
        allOf: [
          {
            type: 'object',
            allOf: [
              {
                type: 'object'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema
          },
          elements: {
            fields: []
          }
        })
    })
  })
})
