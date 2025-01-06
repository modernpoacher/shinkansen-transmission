import debug from 'debug'

import {
  expect
} from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki/transform-schema'

describe('shinkansen-transmission/transmission/to-zashiki/transform-schema', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  /*
   *  Array
   */
  describe('Transforming `array` type schemas', () => {
    it('transforms `array` type schemas', () => {
      const schema = { type: 'array' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            rootSchema: {},
            schema
          },
          elements: {
            fields: []
          }
        })
    })

    it('transforms `array` type schemas with `enum`', () => {
      const schema = {
        type: 'array',
        enum: [
          [],
          [],
          []
        ],
        minItems: 1,
        maxItems: 9,
        uniqueItems: true,
        minContains: 1,
        maxContains: 9
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            rootSchema: {},
            schema,
            minItems: 1,
            maxItems: 9,
            hasUniqueItems: true,
            minContains: 1,
            maxContains: 9,
            items: [
              [],
              [],
              []
            ],
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              minItems: 1,
              maxItems: 9,
              hasUniqueItems: true,
              minContains: 1,
              maxContains: 9,
              items: [
                [],
                [],
                []
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `array` type schemas with `anyOf`', () => {
      const schema = {
        type: 'array',
        anyOf: [
          { const: [] },
          { const: [] },
          { const: [] }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    const: []
                  }
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  type: 'array',
                  item: 1,
                  parentUri: '#/',
                  uri: '#/1',
                  rootSchema: {},
                  schema: {
                    const: []
                  }
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  type: 'array',
                  item: 2,
                  parentUri: '#/',
                  uri: '#/2',
                  rootSchema: {},
                  schema: {
                    const: []
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: {},
                    schema: {
                      const: []
                    }
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'array',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: {},
                    schema: {
                      const: []
                    }
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'array',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: {},
                    schema: {
                      const: []
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

    it('transforms `array` type schemas with `oneOf`', () => {
      const schema = {
        type: 'array',
        oneOf: [
          {
            const: [],
            minItems: 1,
            maxItems: 9,
            uniqueItems: true,
            minContains: 1,
            maxContains: 9
          },
          {
            const: [],
            minItems: 1,
            maxItems: 9,
            uniqueItems: true,
            minContains: 1,
            maxContains: 9
          },
          {
            const: [],
            minItems: 1,
            maxItems: 9,
            uniqueItems: true,
            minContains: 1,
            maxContains: 9
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    const: [],
                    minItems: 1,
                    maxItems: 9,
                    uniqueItems: true,
                    minContains: 1,
                    maxContains: 9
                  },
                  minItems: 1,
                  maxItems: 9,
                  hasUniqueItems: true,
                  minContains: 1,
                  maxContains: 9
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  type: 'array',
                  item: 1,
                  parentUri: '#/',
                  uri: '#/1',
                  rootSchema: {},
                  schema: {
                    const: [],
                    minItems: 1,
                    maxItems: 9,
                    uniqueItems: true,
                    minContains: 1,
                    maxContains: 9
                  },
                  minItems: 1,
                  maxItems: 9,
                  hasUniqueItems: true,
                  minContains: 1,
                  maxContains: 9
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  type: 'array',
                  item: 2,
                  parentUri: '#/',
                  uri: '#/2',
                  rootSchema: {},
                  schema: {
                    const: [],
                    minItems: 1,
                    maxItems: 9,
                    uniqueItems: true,
                    minContains: 1,
                    maxContains: 9
                  },
                  minItems: 1,
                  maxItems: 9,
                  hasUniqueItems: true,
                  minContains: 1,
                  maxContains: 9
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: {},
                    schema: {
                      const: [],
                      minItems: 1,
                      maxItems: 9,
                      uniqueItems: true,
                      minContains: 1,
                      maxContains: 9
                    },
                    minItems: 1,
                    maxItems: 9,
                    hasUniqueItems: true,
                    minContains: 1,
                    maxContains: 9
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'array',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: {},
                    schema: {
                      const: [],
                      minItems: 1,
                      maxItems: 9,
                      uniqueItems: true,
                      minContains: 1,
                      maxContains: 9
                    },
                    minItems: 1,
                    maxItems: 9,
                    hasUniqueItems: true,
                    minContains: 1,
                    maxContains: 9
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'array',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: {},
                    schema: {
                      const: [],
                      minItems: 1,
                      maxItems: 9,
                      uniqueItems: true,
                      minContains: 1,
                      maxContains: 9
                    },
                    minItems: 1,
                    maxItems: 9,
                    hasUniqueItems: true,
                    minContains: 1,
                    maxContains: 9
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

    it('transforms `array` type schemas with `allOf`', () => {
      const schema = {
        type: 'array',
        allOf: [
          { const: [] },
          { minItems: 1 },
          { maxItems: 9 },
          { uniqueItems: true },
          { minContains: 1 },
          { maxContains: 9 }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            rootSchema: {},
            schema,
            minItems: 1,
            maxItems: 9,
            hasUniqueItems: true,
            minContains: 1,
            maxContains: 9
          },
          elements: {
            field: {
              id: '#/',
              minItems: 1,
              maxItems: 9,
              hasUniqueItems: true,
              minContains: 1,
              maxContains: 9
            }
          }
        })
    })

    it('transforms `array` type schemas', () => {
      const schema = {
        type: 'array',
        const: [],
        minItems: 1,
        maxItems: 9,
        uniqueItems: true,
        minContains: 1,
        maxContains: 9
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            rootSchema: {},
            schema,
            minItems: 1,
            maxItems: 9,
            hasUniqueItems: true,
            minContains: 1,
            maxContains: 9
          },
          elements: {
            fields: []
          }
        })
    })

    it('transforms `array` type schemas with `enum` (with an `array` type with `enum`)', () => {
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
            rootSchema: {},
            schema,
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

    it('transforms `array` type schemas with `enum` (with an `array` type with `anyOf`)', () => {
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
            rootSchema: {},
            schema,
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

    it('transforms `array` type schemas with `enum` (with an `array` type with `oneOf`)', () => {
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
            rootSchema: {},
            schema,
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

    it('transforms `array` type schemas with `enum` (with an `array` type with `allOf`)', () => {
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
            rootSchema: {},
            schema,
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

    it('transforms `array` type schemas with `anyOf` (with an `array` type with `enum`)', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    type: 'array',
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: {},
                    schema: {
                      type: 'array',
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

    it('transforms `array` type schemas with `anyOf` (with an `array` type with `anyOf`)', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    type: 'array',
                    anyOf: [
                      {
                        type: 'array'
                      }
                    ]
                  },
                  items: [
                    {
                      meta: {
                        type: 'array',
                        item: 0,
                        parentUri: '#/0',
                        uri: '#/0/0',
                        rootSchema: {},
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
                          rootSchema: {},
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
                    rootSchema: {},
                    schema: {
                      type: 'array',
                      anyOf: [
                        {
                          type: 'array'
                        }
                      ]
                    },
                    items: [
                      {
                        meta: {
                          type: 'array',
                          item: 0,
                          parentUri: '#/0',
                          uri: '#/0/0',
                          rootSchema: {},
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
                            rootSchema: {},
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

    it('transforms `array` type schemas with `anyOf` (with an `array` type with `oneOf`)', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    type: 'array',
                    oneOf: [
                      {
                        type: 'array'
                      }
                    ]
                  },
                  items: [
                    {
                      meta: {
                        type: 'array',
                        item: 0,
                        parentUri: '#/0',
                        uri: '#/0/0',
                        rootSchema: {},
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
                          rootSchema: {},
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
                    rootSchema: {},
                    schema: {
                      type: 'array',
                      oneOf: [
                        {
                          type: 'array'
                        }
                      ]
                    },
                    items: [
                      {
                        meta: {
                          type: 'array',
                          item: 0,
                          parentUri: '#/0',
                          uri: '#/0/0',
                          rootSchema: {},
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
                            rootSchema: {},
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

    it('transforms `array` type schemas with `anyOf` (with an `array` type with `allOf`)', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: {},
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

    it('transforms `array` type schemas with `oneOf` (with an `array` type with `enum`)', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    type: 'array',
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: {},
                    schema: {
                      type: 'array',
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

    it('transforms `array` type schemas with `oneOf` (with an `array` type with `anyOf`)', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    type: 'array',
                    anyOf: [
                      {
                        type: 'array'
                      }
                    ]
                  },
                  items: [
                    {
                      meta: {
                        type: 'array',
                        item: 0,
                        parentUri: '#/0',
                        uri: '#/0/0',
                        rootSchema: {},
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
                          rootSchema: {},
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
                    rootSchema: {},
                    schema: {
                      type: 'array',
                      anyOf: [
                        {
                          type: 'array'
                        }
                      ]
                    },
                    items: [
                      {
                        meta: {
                          type: 'array',
                          item: 0,
                          parentUri: '#/0',
                          uri: '#/0/0',
                          rootSchema: {},
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
                            rootSchema: {},
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

    it('transforms `array` type schemas with `oneOf` (with an `array` type with `oneOf`)', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    type: 'array',
                    oneOf: [
                      {
                        type: 'array'
                      }
                    ]
                  },
                  items: [
                    {
                      meta: {
                        type: 'array',
                        item: 0,
                        parentUri: '#/0',
                        uri: '#/0/0',
                        rootSchema: {},
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
                          rootSchema: {},
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
                    rootSchema: {},
                    schema: {
                      type: 'array',
                      oneOf: [
                        {
                          type: 'array'
                        }
                      ]
                    },
                    items: [
                      {
                        meta: {
                          type: 'array',
                          item: 0,
                          parentUri: '#/0',
                          uri: '#/0/0',
                          rootSchema: {},
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
                            rootSchema: {},
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

    it('transforms `array` type schemas with `oneOf` (with an `array` type with `allOf`)', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
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
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: {},
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

    it('transforms `array` type schemas with `allOf` (with an `array` type with `enum`)', () => {
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
            rootSchema: {},
            schema
          },
          elements: {
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `allOf` (with an `array` type with `anyOf`)', () => {
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
            rootSchema: {},
            schema
          },
          elements: {
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `allOf` (with an `array` type with `oneOf`)', () => {
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
            rootSchema: {},
            schema
          },
          elements: {
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `allOf` (with an `array` type with `allOf`)', () => {
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
            rootSchema: {},
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
