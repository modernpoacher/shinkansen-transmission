/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 */

import {
  expect
} from 'chai'

import transform from '#transmission/transmission/to-zashiki/transform-root-schema'

describe('#transmission/transmission/to-zashiki/transform-root-schema', () => {
  /**
   *  Object
   */
  describe('Transforming `object` type schemas', () => {
    it('transforms `object` type schemas', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = { type: 'object' }

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

    it('transforms `object` type schemas with `enum`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'object',
        enum: [
          {},
          {},
          {}
        ],
        minProperties: 1,
        maxProperties: 9
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            minProperties: 1,
            maxProperties: 9,
            items: [
              {},
              {},
              {}
            ],
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              minProperties: 1,
              maxProperties: 9,
              items: [
                {},
                {},
                {}
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type schemas with `anyOf`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'object',
        anyOf: [
          { const: {} },
          { const: {} },
          { const: {} }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            items: [
              {
                meta: {
                  type: 'object',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
                  schema: {
                    const: {}
                  }
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  type: 'object',
                  item: 1,
                  parentUri: '#/',
                  uri: '#/1',
                  rootSchema: schema,
                  schema: {
                    const: {}
                  }
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  type: 'object',
                  item: 2,
                  parentUri: '#/',
                  uri: '#/2',
                  rootSchema: schema,
                  schema: {
                    const: {}
                  }
                },
                elements: {
                  fields: []
                }
              }
            ],
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
                      const: {}
                    }
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'object',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: schema,
                    schema: {
                      const: {}
                    }
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'object',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: schema,
                    schema: {
                      const: {}
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

    it('transforms `object` type schemas with `oneOf`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'object',
        oneOf: [
          {
            const: {},
            minProperties: 1,
            maxProperties: 9
          },
          {
            const: {},
            minProperties: 1,
            maxProperties: 9
          },
          {
            const: {},
            minProperties: 1,
            maxProperties: 9
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            items: [
              {
                meta: {
                  type: 'object',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
                  schema: {
                    const: {},
                    minProperties: 1,
                    maxProperties: 9
                  },
                  minProperties: 1,
                  maxProperties: 9
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  type: 'object',
                  item: 1,
                  parentUri: '#/',
                  uri: '#/1',
                  rootSchema: schema,
                  schema: {
                    const: {},
                    minProperties: 1,
                    maxProperties: 9
                  },
                  minProperties: 1,
                  maxProperties: 9
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  type: 'object',
                  item: 2,
                  parentUri: '#/',
                  uri: '#/2',
                  rootSchema: schema,
                  schema: {
                    const: {},
                    minProperties: 1,
                    maxProperties: 9
                  },
                  minProperties: 1,
                  maxProperties: 9
                },
                elements: {
                  fields: []
                }
              }
            ],
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
                      const: {},
                      minProperties: 1,
                      maxProperties: 9
                    },
                    minProperties: 1,
                    maxProperties: 9
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'object',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: schema,
                    schema: {
                      const: {},
                      minProperties: 1,
                      maxProperties: 9
                    },
                    minProperties: 1,
                    maxProperties: 9
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'object',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: schema,
                    schema: {
                      const: {},
                      minProperties: 1,
                      maxProperties: 9
                    },
                    minProperties: 1,
                    maxProperties: 9
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

    it('transforms `object` type schemas with `allOf`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'object',
        allOf: [
          { const: {} },
          { minProperties: 1 },
          { maxProperties: 9 }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            minProperties: 1,
            maxProperties: 9
          },
          elements: {
            field: {
              id: '#/',
              minProperties: 1,
              maxProperties: 9
            }
          }
        })
    })

    it('transforms `object` type schemas', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'object',
        const: {},
        minProperties: 1,
        maxProperties: 9
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            minProperties: 1,
            maxProperties: 9
          },
          elements: {
            fields: []
          }
        })
    })

    it('transforms `object` type `object` type schemas with `enum` (with an `object` type with `enum`)', () => {
      /**
       *  @type {SchemaType}
       */
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

    it('transforms `object` type `object` type schemas with `enum` (with an `object` type with `anyOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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

    it('transforms `object` type `object` type schemas with `enum` (with an `object` type with `oneOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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

    it('transforms `object` type `object` type schemas with `enum` (with an `object` type with `allOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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

    it('transforms `object` type `object` type schemas with `anyOf` (with an `object` type with `enum`)', () => {
      /**
       *  @type {SchemaType}
       */
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
                  items: [
                    {},
                    {},
                    {}
                  ],
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
                    items: [
                      {},
                      {},
                      {}
                    ],
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

    it('transforms `object` type `object` type schemas with `anyOf` (with an `object` type with `anyOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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

    it('transforms `object` type `object` type schemas with `anyOf` (with an `object` type with `oneOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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

    it('transforms `object` type `object` type schemas with `anyOf` (with an `object` type with `allOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
                  field: {
                    id: '#/0'
                  }
                }
              }
            ],
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
                    field: {
                      id: '#/0'
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type `object` type schemas with `oneOf` (with an `object` type with `enum`)', () => {
      /**
       *  @type {SchemaType}
       */
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
                  items: [
                    {},
                    {},
                    {}
                  ],
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
                    items: [
                      {},
                      {},
                      {}
                    ],
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

    it('transforms `object` type `object` type schemas with `oneOf` (with an `object` type with `anyOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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

    it('transforms `object` type `object` type schemas with `oneOf` (with an `object` type with `oneOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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

    it('transforms `object` type `object` type schemas with `oneOf` (with an `object` type with `allOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
                  field: {
                    id: '#/0'
                  }
                }
              }
            ],
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
                    field: {
                      id: '#/0'
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `object` type `object` type schemas with `allOf` (with an `object` type with `enum`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms `object` type `object` type schemas with `allOf` (with an `object` type with `anyOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms `object` type `object` type schemas with `allOf` (with an `object` type with `oneOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms `object` type `object` type schemas with `allOf` (with an `object` type with `allOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            field: {
              id: '#/'
            }
          }
        })
    })
  })
})
