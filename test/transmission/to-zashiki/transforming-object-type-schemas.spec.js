import debug from 'debug'

import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki'

describe.only('shinkansen-transmission/transmission/to-zashiki', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('Transforming `object` type schemas', () => {
    xit('transforms `object` type schemas with `enum` (with an `object` type with `enum`)', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms `object` type schemas with `enum` (with an `object` type with `anyOf`)', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms `object` type schemas with `enum` (with an `object` type with `oneOf`)', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms `object` type schemas with `enum` (with an `object` type with `allOf`)', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms `object` type schemas with `anyOf` (with an `object` type with `enum`)', () => {
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
                    selectedItems: []
                  },
                  elements: {
                    enum: {
                      id: '#/0',
                      items: [
                        {},
                        {},
                        {}
                      ],
                      selectedItems: []
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    /*
     *  `parentUri`
     */
    xit('transforms `object` type schemas with `anyOf` (with an `object` type with `anyOf`)', () => {
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
                    selectedItems: []
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
                            }
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      selectedItems: []
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    /*
     *  `parentUri`
     */
    xit('transforms `object` type schemas with `anyOf` (with an `object` type with `oneOf`)', () => {
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
                    selectedItems: []
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
                            }
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      selectedItems: []
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    /*
     *  `parentUri` `field`
     */
    xit('transforms `object` type schemas with `anyOf` (with an `object` type with `allOf`)', () => {
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
                    }
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

    /*
     *  `parentUri`
     */
    xit('transforms `object` type schemas with `oneOf` (with an `object` type with `enum`)', () => {
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
                    selectedItems: []
                  },
                  elements: {
                    enum: {
                      id: '#/0',
                      items: [
                        {},
                        {},
                        {}
                      ],
                      selectedItems: []
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    /*
     *  `parentUri`
     */
    xit('transforms `object` type schemas with `oneOf` (with an `object` type with `anyOf`)', () => {
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
                    selectedItems: []
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
                            }
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      selectedItems: []
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    /*
     *  `parentUri`
     */
    xit('transforms `object` type schemas with `oneOf` (with an `object` type with `oneOf`)', () => {
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
                    selectedItems: []
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
                            }
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      selectedItems: []
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    /*
     *  `parentUri` `field`
     */
    xit('transforms `object` type schemas with `oneOf` (with an `object` type with `allOf`)', () => {
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
                    }
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

    /*
     *  `parentUri` `field`
     */
    xit('transforms `object` type schemas with `allOf` (with an `object` type with `enum`)', () => {
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

    /*
     *  `parentUri` `field`
     */
    xit('transforms `object` type schemas with `allOf` (with an `object` type with `anyOf`)', () => {
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

    /*
     *  `parentUri` `field`
     */
    xit('transforms `object` type schemas with `allOf` (with an `object` type with `oneOf`)', () => {
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

    /*
     *  `parentUri` `field`
     */
    xit('transforms `object` type schemas with `allOf` (with an `object` type with `allOf`)', () => {
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
