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

  describe('Transforming `array` type schemas', () => {
    /*
     *  `parentUri`
     */
    xit('transforms `array` type schemas with `enum` (with an `array` type with `enum`)', () => {
      const schema = {
        type: 'array',
        enum: [
          {
            type: 'array',
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
            type: 'array',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                {
                  type: 'array',
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
    xit('transforms `array` type schemas with `enum` (with an `array` type with `anyOf`)', () => {
      const schema = {
        type: 'array',
        enum: [
          {
            type: 'array',
            anyOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                {
                  type: 'array',
                  anyOf: [
                    {
                      type: 'array'
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
    xit('transforms `array` type schemas with `enum` (with an `array` type with `oneOf`)', () => {
      const schema = {
        type: 'array',
        enum: [
          {
            type: 'array',
            oneOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                {
                  type: 'array',
                  oneOf: [
                    {
                      type: 'array'
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
    xit('transforms `array` type schemas with `enum` (with an `array` type with `allOf`)', () => {
      const schema = {
        type: 'array',
        enum: [
          {
            type: 'array',
            allOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                {
                  type: 'array',
                  allOf: [
                    {
                      type: 'array'
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
    xit('transforms `array` type schemas with `anyOf` (with an `array` type with `enum`)', () => {
      const schema = {
        type: 'array',
        anyOf: [
          {
            type: 'array',
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
            type: 'array',
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'array',
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
    xit('transforms `array` type schemas with `anyOf` (with an `array` type with `anyOf`)', () => {
      const schema = {
        type: 'array',
        anyOf: [
          {
            type: 'array',
            anyOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'array',
                      anyOf: [
                        {
                          type: 'array'
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
                            type: 'array',
                            item: 0,
                            parentUri: '#/0',
                            uri: '#/0/0',
                            rootSchema: schema,
                            schema: {
                              type: 'array'
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
    xit('transforms `array` type schemas with `anyOf` (with an `array` type with `oneOf`)', () => {
      const schema = {
        type: 'array',
        anyOf: [
          {
            type: 'array',
            oneOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'array',
                      oneOf: [
                        {
                          type: 'array'
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
                            type: 'array',
                            item: 0,
                            parentUri: '#/0',
                            uri: '#/0/0',
                            rootSchema: schema,
                            schema: {
                              type: 'array'
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
    xit('transforms `array` type schemas with `anyOf` (with an `array` type with `allOf`)', () => {
      const schema = {
        type: 'array',
        anyOf: [
          {
            type: 'array',
            allOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'array',
                      allOf: [
                        {
                          type: 'array'
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
    xit('transforms `array` type schemas with `oneOf` (with an `array` type with `enum`)', () => {
      const schema = {
        type: 'array',
        oneOf: [
          {
            type: 'array',
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
            type: 'array',
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'array',
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
    xit('transforms `array` type schemas with `oneOf` (with an `array` type with `anyOf`)', () => {
      const schema = {
        type: 'array',
        oneOf: [
          {
            type: 'array',
            anyOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'array',
                      anyOf: [
                        {
                          type: 'array'
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
                            type: 'array',
                            item: 0,
                            parentUri: '#/0',
                            uri: '#/0/0',
                            rootSchema: schema,
                            schema: {
                              type: 'array'
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
    xit('transforms `array` type schemas with `oneOf` (with an `array` type with `oneOf`)', () => {
      const schema = {
        type: 'array',
        oneOf: [
          {
            type: 'array',
            oneOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'array',
                      oneOf: [
                        {
                          type: 'array'
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
                            type: 'array',
                            item: 0,
                            parentUri: '#/0',
                            uri: '#/0/0',
                            rootSchema: schema,
                            schema: {
                              type: 'array'
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
    xit('transforms `array` type schemas with `oneOf` (with an `array` type with `allOf`)', () => {
      const schema = {
        type: 'array',
        oneOf: [
          {
            type: 'array',
            allOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      type: 'array',
                      allOf: [
                        {
                          type: 'array'
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
    xit('transforms `array` type schemas with `allOf` (with an `array` type with `enum`)', () => {
      const schema = {
        type: 'array',
        allOf: [
          {
            type: 'array',
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
            type: 'array',
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
    xit('transforms `array` type schemas with `allOf` (with an `array` type with `anyOf`)', () => {
      const schema = {
        type: 'array',
        allOf: [
          {
            type: 'array',
            anyOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
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
    xit('transforms `array` type schemas with `allOf` (with an `array` type with `oneOf`)', () => {
      const schema = {
        type: 'array',
        allOf: [
          {
            type: 'array',
            oneOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
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
    xit('transforms `array` type schemas with `allOf` (with an `array` type with `allOf`)', () => {
      const schema = {
        type: 'array',
        allOf: [
          {
            type: 'array',
            allOf: [
              {
                type: 'array'
              }
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
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
