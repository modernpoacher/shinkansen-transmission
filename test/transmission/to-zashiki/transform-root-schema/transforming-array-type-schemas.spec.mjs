/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 */

import debug from 'debug'

import {
  expect
} from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki/transform-root-schema'

describe('shinkansen-transmission/transmission/to-zashiki/transform-root-schema', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  /**
   *  Array
   */
  describe('Transforming `array` type schemas', () => {
    it('transforms `array` type schemas', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = { type: 'array' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            // rootSchema: [],
            schema
          },
          elements: {
            fields: []
          }
        })
    })

    it('transforms `array` type schemas with `enum`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'array',
        enum: [
          [],
          [],
          []
        ],
        minItems: 0,
        maxItems: 3,
        uniqueItems: true,
        minContains: 0,
        maxContains: 3
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            // rootSchema: [],
            schema,
            minItems: 0,
            maxItems: 3,
            hasUniqueItems: true,
            minContains: 0,
            maxContains: 3,
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
              minItems: 0,
              maxItems: 3,
              hasUniqueItems: true,
              minContains: 0,
              maxContains: 3,
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
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'array',
        anyOf: [
          {
            const: [
              1
            ],
            minItems: 1,
            maxItems: 3,
            uniqueItems: true,
            minContains: 1,
            maxContains: 3
          },
          {
            const: [
              1,
              2
            ],
            minItems: 2,
            maxItems: 3,
            uniqueItems: true,
            minContains: 2,
            maxContains: 3
          },
          {
            const: [
              1,
              2,
              3
            ],
            minItems: 3,
            maxItems: 3,
            uniqueItems: true,
            minContains: 3,
            maxContains: 3
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            uri: '#/',
            type: 'array',
            schema: {
              type: 'array',
              anyOf: [
                {
                  const: [
                    1
                  ],
                  minItems: 1,
                  maxItems: 3,
                  uniqueItems: true,
                  minContains: 1,
                  maxContains: 3
                },
                {
                  const: [
                    1,
                    2
                  ],
                  minItems: 2,
                  maxItems: 3,
                  uniqueItems: true,
                  minContains: 2,
                  maxContains: 3
                },
                {
                  const: [
                    1,
                    2,
                    3
                  ],
                  minItems: 3,
                  maxItems: 3,
                  uniqueItems: true,
                  minContains: 3,
                  maxContains: 3
                }
              ]
            },
            selectedItems: [],
            items: [
              {
                meta: {
                  uri: '#/0',
                  type: 'array',
                  parentUri: '#/',
                  minItems: 1,
                  maxItems: 3,
                  hasUniqueItems: true,
                  minContains: 1,
                  maxContains: 3,
                  schema: {
                    const: [
                      1
                    ],
                    minItems: 1,
                    maxItems: 3,
                    uniqueItems: true,
                    minContains: 1,
                    maxContains: 3
                  },
                  rootSchema: {
                    type: 'array',
                    anyOf: [
                      {
                        const: [
                          1
                        ],
                        minItems: 1,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 1,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2
                        ],
                        minItems: 2,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 2,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2,
                          3
                        ],
                        minItems: 3,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 3,
                        maxContains: 3
                      }
                    ]
                  },
                  item: 0
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  uri: '#/1',
                  type: 'array',
                  parentUri: '#/',
                  minItems: 2,
                  maxItems: 3,
                  hasUniqueItems: true,
                  minContains: 2,
                  maxContains: 3,
                  schema: {
                    const: [
                      1,
                      2
                    ],
                    minItems: 2,
                    maxItems: 3,
                    uniqueItems: true,
                    minContains: 2,
                    maxContains: 3
                  },
                  rootSchema: {
                    type: 'array',
                    anyOf: [
                      {
                        const: [
                          1
                        ],
                        minItems: 1,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 1,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2
                        ],
                        minItems: 2,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 2,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2,
                          3
                        ],
                        minItems: 3,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 3,
                        maxContains: 3
                      }
                    ]
                  },
                  item: 1
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  uri: '#/2',
                  type: 'array',
                  parentUri: '#/',
                  minItems: 3,
                  maxItems: 3,
                  hasUniqueItems: true,
                  minContains: 3,
                  maxContains: 3,
                  schema: {
                    const: [
                      1,
                      2,
                      3
                    ],
                    minItems: 3,
                    maxItems: 3,
                    uniqueItems: true,
                    minContains: 3,
                    maxContains: 3
                  },
                  rootSchema: {
                    type: 'array',
                    anyOf: [
                      {
                        const: [
                          1
                        ],
                        minItems: 1,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 1,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2
                        ],
                        minItems: 2,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 2,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2,
                          3
                        ],
                        minItems: 3,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 3,
                        maxContains: 3
                      }
                    ]
                  },
                  item: 2
                },
                elements: {
                  fields: []
                }
              }
            ]
          },
          elements: {
            anyOf: {
              selectedItems: [],
              items: [
                {
                  meta: {
                    uri: '#/0',
                    type: 'array',
                    parentUri: '#/',
                    minItems: 1,
                    maxItems: 3,
                    hasUniqueItems: true,
                    minContains: 1,
                    maxContains: 3,
                    schema: {
                      const: [
                        1
                      ],
                      minItems: 1,
                      maxItems: 3,
                      uniqueItems: true,
                      minContains: 1,
                      maxContains: 3
                    },
                    rootSchema: {
                      type: 'array',
                      anyOf: [
                        {
                          const: [
                            1
                          ],
                          minItems: 1,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 1,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2
                          ],
                          minItems: 2,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 2,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2,
                            3
                          ],
                          minItems: 3,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 3,
                          maxContains: 3
                        }
                      ]
                    },
                    item: 0
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    uri: '#/1',
                    type: 'array',
                    parentUri: '#/',
                    minItems: 2,
                    maxItems: 3,
                    hasUniqueItems: true,
                    minContains: 2,
                    maxContains: 3,
                    schema: {
                      const: [
                        1,
                        2
                      ],
                      minItems: 2,
                      maxItems: 3,
                      uniqueItems: true,
                      minContains: 2,
                      maxContains: 3
                    },
                    rootSchema: {
                      type: 'array',
                      anyOf: [
                        {
                          const: [
                            1
                          ],
                          minItems: 1,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 1,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2
                          ],
                          minItems: 2,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 2,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2,
                            3
                          ],
                          minItems: 3,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 3,
                          maxContains: 3
                        }
                      ]
                    },
                    item: 1
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    uri: '#/2',
                    type: 'array',
                    parentUri: '#/',
                    minItems: 3,
                    maxItems: 3,
                    hasUniqueItems: true,
                    minContains: 3,
                    maxContains: 3,
                    schema: {
                      const: [
                        1,
                        2,
                        3
                      ],
                      minItems: 3,
                      maxItems: 3,
                      uniqueItems: true,
                      minContains: 3,
                      maxContains: 3
                    },
                    rootSchema: {
                      type: 'array',
                      anyOf: [
                        {
                          const: [
                            1
                          ],
                          minItems: 1,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 1,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2
                          ],
                          minItems: 2,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 2,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2,
                            3
                          ],
                          minItems: 3,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 3,
                          maxContains: 3
                        }
                      ]
                    },
                    item: 2
                  },
                  elements: {
                    fields: []
                  }
                }
              ],
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `oneOf`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'array',
        oneOf: [
          {
            const: [
              1
            ],
            minItems: 1,
            maxItems: 3,
            uniqueItems: true,
            minContains: 1,
            maxContains: 3
          },
          {
            const: [
              1,
              2
            ],
            minItems: 2,
            maxItems: 3,
            uniqueItems: true,
            minContains: 2,
            maxContains: 3
          },
          {
            const: [
              1,
              2,
              3
            ],
            minItems: 3,
            maxItems: 3,
            uniqueItems: true,
            minContains: 3,
            maxContains: 3
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            uri: '#/',
            type: 'array',
            schema: {
              type: 'array',
              oneOf: [
                {
                  const: [
                    1
                  ],
                  minItems: 1,
                  maxItems: 3,
                  uniqueItems: true,
                  minContains: 1,
                  maxContains: 3
                },
                {
                  const: [
                    1,
                    2
                  ],
                  minItems: 2,
                  maxItems: 3,
                  uniqueItems: true,
                  minContains: 2,
                  maxContains: 3
                },
                {
                  const: [
                    1,
                    2,
                    3
                  ],
                  minItems: 3,
                  maxItems: 3,
                  uniqueItems: true,
                  minContains: 3,
                  maxContains: 3
                }
              ]
            },
            selectedItems: [],
            items: [
              {
                meta: {
                  uri: '#/0',
                  type: 'array',
                  parentUri: '#/',
                  minItems: 1,
                  maxItems: 3,
                  hasUniqueItems: true,
                  minContains: 1,
                  maxContains: 3,
                  schema: {
                    const: [
                      1
                    ],
                    minItems: 1,
                    maxItems: 3,
                    uniqueItems: true,
                    minContains: 1,
                    maxContains: 3
                  },
                  rootSchema: {
                    type: 'array',
                    oneOf: [
                      {
                        const: [
                          1
                        ],
                        minItems: 1,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 1,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2
                        ],
                        minItems: 2,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 2,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2,
                          3
                        ],
                        minItems: 3,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 3,
                        maxContains: 3
                      }
                    ]
                  },
                  item: 0
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  uri: '#/1',
                  type: 'array',
                  parentUri: '#/',
                  minItems: 2,
                  maxItems: 3,
                  hasUniqueItems: true,
                  minContains: 2,
                  maxContains: 3,
                  schema: {
                    const: [
                      1,
                      2
                    ],
                    minItems: 2,
                    maxItems: 3,
                    uniqueItems: true,
                    minContains: 2,
                    maxContains: 3
                  },
                  rootSchema: {
                    type: 'array',
                    oneOf: [
                      {
                        const: [
                          1
                        ],
                        minItems: 1,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 1,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2
                        ],
                        minItems: 2,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 2,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2,
                          3
                        ],
                        minItems: 3,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 3,
                        maxContains: 3
                      }
                    ]
                  },
                  item: 1
                },
                elements: {
                  fields: []
                }
              },
              {
                meta: {
                  uri: '#/2',
                  type: 'array',
                  parentUri: '#/',
                  minItems: 3,
                  maxItems: 3,
                  hasUniqueItems: true,
                  minContains: 3,
                  maxContains: 3,
                  schema: {
                    const: [
                      1,
                      2,
                      3
                    ],
                    minItems: 3,
                    maxItems: 3,
                    uniqueItems: true,
                    minContains: 3,
                    maxContains: 3
                  },
                  rootSchema: {
                    type: 'array',
                    oneOf: [
                      {
                        const: [
                          1
                        ],
                        minItems: 1,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 1,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2
                        ],
                        minItems: 2,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 2,
                        maxContains: 3
                      },
                      {
                        const: [
                          1,
                          2,
                          3
                        ],
                        minItems: 3,
                        maxItems: 3,
                        uniqueItems: true,
                        minContains: 3,
                        maxContains: 3
                      }
                    ]
                  },
                  item: 2
                },
                elements: {
                  fields: []
                }
              }
            ]
          },
          elements: {
            oneOf: {
              selectedItems: [],
              items: [
                {
                  meta: {
                    uri: '#/0',
                    type: 'array',
                    parentUri: '#/',
                    minItems: 1,
                    maxItems: 3,
                    hasUniqueItems: true,
                    minContains: 1,
                    maxContains: 3,
                    schema: {
                      const: [
                        1
                      ],
                      minItems: 1,
                      maxItems: 3,
                      uniqueItems: true,
                      minContains: 1,
                      maxContains: 3
                    },
                    rootSchema: {
                      type: 'array',
                      oneOf: [
                        {
                          const: [
                            1
                          ],
                          minItems: 1,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 1,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2
                          ],
                          minItems: 2,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 2,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2,
                            3
                          ],
                          minItems: 3,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 3,
                          maxContains: 3
                        }
                      ]
                    },
                    item: 0
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    uri: '#/1',
                    type: 'array',
                    parentUri: '#/',
                    minItems: 2,
                    maxItems: 3,
                    hasUniqueItems: true,
                    minContains: 2,
                    maxContains: 3,
                    schema: {
                      const: [
                        1,
                        2
                      ],
                      minItems: 2,
                      maxItems: 3,
                      uniqueItems: true,
                      minContains: 2,
                      maxContains: 3
                    },
                    rootSchema: {
                      type: 'array',
                      oneOf: [
                        {
                          const: [
                            1
                          ],
                          minItems: 1,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 1,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2
                          ],
                          minItems: 2,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 2,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2,
                            3
                          ],
                          minItems: 3,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 3,
                          maxContains: 3
                        }
                      ]
                    },
                    item: 1
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    uri: '#/2',
                    type: 'array',
                    parentUri: '#/',
                    minItems: 3,
                    maxItems: 3,
                    hasUniqueItems: true,
                    minContains: 3,
                    maxContains: 3,
                    schema: {
                      const: [
                        1,
                        2,
                        3
                      ],
                      minItems: 3,
                      maxItems: 3,
                      uniqueItems: true,
                      minContains: 3,
                      maxContains: 3
                    },
                    rootSchema: {
                      type: 'array',
                      oneOf: [
                        {
                          const: [
                            1
                          ],
                          minItems: 1,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 1,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2
                          ],
                          minItems: 2,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 2,
                          maxContains: 3
                        },
                        {
                          const: [
                            1,
                            2,
                            3
                          ],
                          minItems: 3,
                          maxItems: 3,
                          uniqueItems: true,
                          minContains: 3,
                          maxContains: 3
                        }
                      ]
                    },
                    item: 2
                  },
                  elements: {
                    fields: []
                  }
                }
              ],
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `allOf`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'array',
        allOf: [
          {
            const: [
              1,
              2,
              3
            ]
          },
          { minItems: 0 },
          { maxItems: 3 },
          { uniqueItems: true },
          { minContains: 0 },
          { maxContains: 3 }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            uri: '#/',
            type: 'array',
            minItems: 0,
            maxItems: 3,
            hasUniqueItems: true,
            minContains: 0,
            maxContains: 3,
            schema: {
              type: 'array',
              allOf: [
                {
                  const: [
                    1,
                    2,
                    3
                  ]
                },
                {
                  minItems: 0
                },
                {
                  maxItems: 3
                },
                {
                  uniqueItems: true
                },
                {
                  minContains: 0
                },
                {
                  maxContains: 3
                }
              ]
            }
          },
          elements: {
            field: {
              minItems: 0,
              maxItems: 3,
              hasUniqueItems: true,
              minContains: 0,
              maxContains: 3,
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'array',
        const: [],
        minItems: 0,
        maxItems: 3,
        uniqueItems: true,
        minContains: 0,
        maxContains: 3
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            uri: '#/',
            type: 'array',
            minItems: 0,
            maxItems: 3,
            hasUniqueItems: true,
            minContains: 0,
            maxContains: 3,
            schema: {
              type: 'array',
              const: [],
              minItems: 0,
              maxItems: 3,
              uniqueItems: true,
              minContains: 0,
              maxContains: 3
            }
          },
          elements: {
            fields: []
          }
        })
    })

    it('transforms `array` type schemas with `enum` (with an `array` type with `enum`)', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'array',
        enum: [
          {
            type: 'array',
            enum: [
              [],
              [],
              []
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            uri: '#/',
            type: 'array',
            schema: {
              type: 'array',
              enum: [
                {
                  type: 'array',
                  enum: [
                    [],
                    [],
                    []
                  ]
                }
              ]
            },
            selectedItems: [],
            items: [
              {
                type: 'array',
                enum: [
                  [],
                  [],
                  []
                ]
              }
            ]
          },
          elements: {
            enum: {
              selectedItems: [],
              items: [
                {
                  type: 'array',
                  enum: [
                    [],
                    [],
                    []
                  ]
                }
              ],
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `enum` (with an `array` type with `anyOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
            },
            selectedItems: [],
            items: [
              {
                type: 'array',
                anyOf: [
                  {
                    type: 'array'
                  }
                ]
              }
            ]
          },
          elements: {
            enum: {
              selectedItems: [],
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
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `enum` (with an `array` type with `oneOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
            },
            selectedItems: [],
            items: [
              {
                type: 'array',
                oneOf: [
                  {
                    type: 'array'
                  }
                ]
              }
            ]
          },
          elements: {
            enum: {
              selectedItems: [],
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
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `enum` (with an `array` type with `allOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
            },
            selectedItems: [],
            items: [
              {
                type: 'array',
                allOf: [
                  {
                    type: 'array'
                  }
                ]
              }
            ]
          },
          elements: {
            enum: {
              selectedItems: [],
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
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `anyOf` (with an `array` type with `enum`)', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'array',
        anyOf: [
          {
            type: 'array',
            enum: [
              [],
              [],
              []
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            uri: '#/',
            type: 'array',
            schema: {
              type: 'array',
              anyOf: [
                {
                  type: 'array',
                  enum: [
                    [],
                    [],
                    []
                  ]
                }
              ]
            },
            selectedItems: [],
            items: [
              {
                meta: {
                  uri: '#/0',
                  type: 'array',
                  parentUri: '#/',
                  schema: {
                    type: 'array',
                    enum: [
                      [],
                      [],
                      []
                    ]
                  },
                  rootSchema: {
                    type: 'array',
                    anyOf: [
                      {
                        type: 'array',
                        enum: [
                          [],
                          [],
                          []
                        ]
                      }
                    ]
                  },
                  selectedItems: [],
                  items: [
                    [],
                    [],
                    []
                  ],
                  item: 0
                },
                elements: {
                  enum: {
                    selectedItems: [],
                    items: [
                      [],
                      [],
                      []
                    ],
                    id: '#/0'
                  }
                }
              }
            ]
          },
          elements: {
            anyOf: {
              selectedItems: [],
              items: [
                {
                  meta: {
                    uri: '#/0',
                    type: 'array',
                    parentUri: '#/',
                    schema: {
                      type: 'array',
                      enum: [
                        [],
                        [],
                        []
                      ]
                    },
                    rootSchema: {
                      type: 'array',
                      anyOf: [
                        {
                          type: 'array',
                          enum: [
                            [],
                            [],
                            []
                          ]
                        }
                      ]
                    },
                    selectedItems: [],
                    items: [
                      [],
                      [],
                      []
                    ],
                    item: 0
                  },
                  elements: {
                    enum: {
                      selectedItems: [],
                      items: [
                        [],
                        [],
                        []
                      ],
                      id: '#/0'
                    }
                  }
                }
              ],
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `anyOf` (with an `array` type with `anyOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
            },
            selectedItems: [],
            items: [
              {
                meta: {
                  uri: '#/0',
                  type: 'array',
                  parentUri: '#/',
                  schema: {
                    type: 'array',
                    anyOf: [
                      {
                        type: 'array'
                      }
                    ]
                  },
                  rootSchema: {
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
                  },
                  selectedItems: [],
                  items: [
                    {
                      meta: {
                        uri: '#/0/0',
                        type: 'array',
                        parentUri: '#/0',
                        schema: {
                          type: 'array'
                        },
                        rootSchema: {
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
                        },
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ],
                  item: 0
                },
                elements: {
                  anyOf: {
                    selectedItems: [],
                    items: [
                      {
                        meta: {
                          uri: '#/0/0',
                          type: 'array',
                          parentUri: '#/0',
                          schema: {
                            type: 'array'
                          },
                          rootSchema: {
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
                          },
                          item: 0
                        },
                        elements: {
                          fields: []
                        }
                      }
                    ],
                    id: '#/0'
                  }
                }
              }
            ]
          },
          elements: {
            anyOf: {
              selectedItems: [],
              items: [
                {
                  meta: {
                    uri: '#/0',
                    type: 'array',
                    parentUri: '#/',
                    schema: {
                      type: 'array',
                      anyOf: [
                        {
                          type: 'array'
                        }
                      ]
                    },
                    rootSchema: {
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
                    },
                    selectedItems: [],
                    items: [
                      {
                        meta: {
                          uri: '#/0/0',
                          type: 'array',
                          parentUri: '#/0',
                          schema: {
                            type: 'array'
                          },
                          rootSchema: {
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
                          },
                          item: 0
                        },
                        elements: {
                          fields: []
                        }
                      }
                    ],
                    item: 0
                  },
                  elements: {
                    anyOf: {
                      selectedItems: [],
                      items: [
                        {
                          meta: {
                            uri: '#/0/0',
                            type: 'array',
                            parentUri: '#/0',
                            schema: {
                              type: 'array'
                            },
                            rootSchema: {
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
                            },
                            item: 0
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      id: '#/0'
                    }
                  }
                }
              ],
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `anyOf` (with an `array` type with `oneOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
            },
            selectedItems: [],
            items: [
              {
                meta: {
                  uri: '#/0',
                  type: 'array',
                  parentUri: '#/',
                  schema: {
                    type: 'array',
                    oneOf: [
                      {
                        type: 'array'
                      }
                    ]
                  },
                  rootSchema: {
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
                  },
                  selectedItems: [],
                  items: [
                    {
                      meta: {
                        uri: '#/0/0',
                        type: 'array',
                        parentUri: '#/0',
                        schema: {
                          type: 'array'
                        },
                        rootSchema: {
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
                        },
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ],
                  item: 0
                },
                elements: {
                  oneOf: {
                    selectedItems: [],
                    items: [
                      {
                        meta: {
                          uri: '#/0/0',
                          type: 'array',
                          parentUri: '#/0',
                          schema: {
                            type: 'array'
                          },
                          rootSchema: {
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
                          },
                          item: 0
                        },
                        elements: {
                          fields: []
                        }
                      }
                    ],
                    id: '#/0'
                  }
                }
              }
            ]
          },
          elements: {
            anyOf: {
              selectedItems: [],
              items: [
                {
                  meta: {
                    uri: '#/0',
                    type: 'array',
                    parentUri: '#/',
                    schema: {
                      type: 'array',
                      oneOf: [
                        {
                          type: 'array'
                        }
                      ]
                    },
                    rootSchema: {
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
                    },
                    selectedItems: [],
                    items: [
                      {
                        meta: {
                          uri: '#/0/0',
                          type: 'array',
                          parentUri: '#/0',
                          schema: {
                            type: 'array'
                          },
                          rootSchema: {
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
                          },
                          item: 0
                        },
                        elements: {
                          fields: []
                        }
                      }
                    ],
                    item: 0
                  },
                  elements: {
                    oneOf: {
                      selectedItems: [],
                      items: [
                        {
                          meta: {
                            uri: '#/0/0',
                            type: 'array',
                            parentUri: '#/0',
                            schema: {
                              type: 'array'
                            },
                            rootSchema: {
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
                            },
                            item: 0
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      id: '#/0'
                    }
                  }
                }
              ],
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `anyOf` (with an `array` type with `allOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
            },
            selectedItems: [],
            items: [
              {
                meta: {
                  uri: '#/0',
                  type: 'array',
                  parentUri: '#/',
                  schema: {
                    type: 'array',
                    allOf: [
                      {
                        type: 'array'
                      }
                    ]
                  },
                  rootSchema: {
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
                  },
                  item: 0
                },
                elements: {
                  field: {
                    id: '#/0'
                  }
                }
              }
            ]
          },
          elements: {
            anyOf: {
              selectedItems: [],
              items: [
                {
                  meta: {
                    uri: '#/0',
                    type: 'array',
                    parentUri: '#/',
                    schema: {
                      type: 'array',
                      allOf: [
                        {
                          type: 'array'
                        }
                      ]
                    },
                    rootSchema: {
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
                    },
                    item: 0
                  },
                  elements: {
                    field: {
                      id: '#/0'
                    }
                  }
                }
              ],
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `oneOf` (with an `array` type with `enum`)', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'array',
        oneOf: [
          {
            type: 'array',
            enum: [
              [],
              [],
              []
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            uri: '#/',
            type: 'array',
            schema: {
              type: 'array',
              oneOf: [
                {
                  type: 'array',
                  enum: [
                    [],
                    [],
                    []
                  ]
                }
              ]
            },
            selectedItems: [],
            items: [
              {
                meta: {
                  uri: '#/0',
                  type: 'array',
                  parentUri: '#/',
                  schema: {
                    type: 'array',
                    enum: [
                      [],
                      [],
                      []
                    ]
                  },
                  rootSchema: {
                    type: 'array',
                    oneOf: [
                      {
                        type: 'array',
                        enum: [
                          [],
                          [],
                          []
                        ]
                      }
                    ]
                  },
                  selectedItems: [],
                  items: [
                    [],
                    [],
                    []
                  ],
                  item: 0
                },
                elements: {
                  enum: {
                    selectedItems: [],
                    items: [
                      [],
                      [],
                      []
                    ],
                    id: '#/0'
                  }
                }
              }
            ]
          },
          elements: {
            oneOf: {
              selectedItems: [],
              items: [
                {
                  meta: {
                    uri: '#/0',
                    type: 'array',
                    parentUri: '#/',
                    schema: {
                      type: 'array',
                      enum: [
                        [],
                        [],
                        []
                      ]
                    },
                    rootSchema: {
                      type: 'array',
                      oneOf: [
                        {
                          type: 'array',
                          enum: [
                            [],
                            [],
                            []
                          ]
                        }
                      ]
                    },
                    selectedItems: [],
                    items: [
                      [],
                      [],
                      []
                    ],
                    item: 0
                  },
                  elements: {
                    enum: {
                      selectedItems: [],
                      items: [
                        [],
                        [],
                        []
                      ],
                      id: '#/0'
                    }
                  }
                }
              ],
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `oneOf` (with an `array` type with `anyOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
            },
            selectedItems: [],
            items: [
              {
                meta: {
                  uri: '#/0',
                  type: 'array',
                  parentUri: '#/',
                  schema: {
                    type: 'array',
                    anyOf: [
                      {
                        type: 'array'
                      }
                    ]
                  },
                  rootSchema: {
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
                  },
                  selectedItems: [],
                  items: [
                    {
                      meta: {
                        uri: '#/0/0',
                        type: 'array',
                        parentUri: '#/0',
                        schema: {
                          type: 'array'
                        },
                        rootSchema: {
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
                        },
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ],
                  item: 0
                },
                elements: {
                  anyOf: {
                    selectedItems: [],
                    items: [
                      {
                        meta: {
                          uri: '#/0/0',
                          type: 'array',
                          parentUri: '#/0',
                          schema: {
                            type: 'array'
                          },
                          rootSchema: {
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
                          },
                          item: 0
                        },
                        elements: {
                          fields: []
                        }
                      }
                    ],
                    id: '#/0'
                  }
                }
              }
            ]
          },
          elements: {
            oneOf: {
              selectedItems: [],
              items: [
                {
                  meta: {
                    uri: '#/0',
                    type: 'array',
                    parentUri: '#/',
                    schema: {
                      type: 'array',
                      anyOf: [
                        {
                          type: 'array'
                        }
                      ]
                    },
                    rootSchema: {
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
                    },
                    selectedItems: [],
                    items: [
                      {
                        meta: {
                          uri: '#/0/0',
                          type: 'array',
                          parentUri: '#/0',
                          schema: {
                            type: 'array'
                          },
                          rootSchema: {
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
                          },
                          item: 0
                        },
                        elements: {
                          fields: []
                        }
                      }
                    ],
                    item: 0
                  },
                  elements: {
                    anyOf: {
                      selectedItems: [],
                      items: [
                        {
                          meta: {
                            uri: '#/0/0',
                            type: 'array',
                            parentUri: '#/0',
                            schema: {
                              type: 'array'
                            },
                            rootSchema: {
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
                            },
                            item: 0
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      id: '#/0'
                    }
                  }
                }
              ],
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `oneOf` (with an `array` type with `oneOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
            },
            selectedItems: [],
            items: [
              {
                meta: {
                  uri: '#/0',
                  type: 'array',
                  parentUri: '#/',
                  schema: {
                    type: 'array',
                    oneOf: [
                      {
                        type: 'array'
                      }
                    ]
                  },
                  rootSchema: {
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
                  },
                  selectedItems: [],
                  items: [
                    {
                      meta: {
                        uri: '#/0/0',
                        type: 'array',
                        parentUri: '#/0',
                        schema: {
                          type: 'array'
                        },
                        rootSchema: {
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
                        },
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ],
                  item: 0
                },
                elements: {
                  oneOf: {
                    selectedItems: [],
                    items: [
                      {
                        meta: {
                          uri: '#/0/0',
                          type: 'array',
                          parentUri: '#/0',
                          schema: {
                            type: 'array'
                          },
                          rootSchema: {
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
                          },
                          item: 0
                        },
                        elements: {
                          fields: []
                        }
                      }
                    ],
                    id: '#/0'
                  }
                }
              }
            ]
          },
          elements: {
            oneOf: {
              selectedItems: [],
              items: [
                {
                  meta: {
                    uri: '#/0',
                    type: 'array',
                    parentUri: '#/',
                    schema: {
                      type: 'array',
                      oneOf: [
                        {
                          type: 'array'
                        }
                      ]
                    },
                    rootSchema: {
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
                    },
                    selectedItems: [],
                    items: [
                      {
                        meta: {
                          uri: '#/0/0',
                          type: 'array',
                          parentUri: '#/0',
                          schema: {
                            type: 'array'
                          },
                          rootSchema: {
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
                          },
                          item: 0
                        },
                        elements: {
                          fields: []
                        }
                      }
                    ],
                    item: 0
                  },
                  elements: {
                    oneOf: {
                      selectedItems: [],
                      items: [
                        {
                          meta: {
                            uri: '#/0/0',
                            type: 'array',
                            parentUri: '#/0',
                            schema: {
                              type: 'array'
                            },
                            rootSchema: {
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
                            },
                            item: 0
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ],
                      id: '#/0'
                    }
                  }
                }
              ],
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `oneOf` (with an `array` type with `allOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
            },
            selectedItems: [],
            items: [
              {
                meta: {
                  uri: '#/0',
                  type: 'array',
                  parentUri: '#/',
                  schema: {
                    type: 'array',
                    allOf: [
                      {
                        type: 'array'
                      }
                    ]
                  },
                  rootSchema: {
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
                  },
                  item: 0
                },
                elements: {
                  field: {
                    id: '#/0'
                  }
                }
              }
            ]
          },
          elements: {
            oneOf: {
              selectedItems: [],
              items: [
                {
                  meta: {
                    uri: '#/0',
                    type: 'array',
                    parentUri: '#/',
                    schema: {
                      type: 'array',
                      allOf: [
                        {
                          type: 'array'
                        }
                      ]
                    },
                    rootSchema: {
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
                    },
                    item: 0
                  },
                  elements: {
                    field: {
                      id: '#/0'
                    }
                  }
                }
              ],
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `allOf` (with an `array` type with `enum`)', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'array',
        allOf: [
          {
            type: 'array',
            enum: [
              [],
              [],
              []
            ]
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            uri: '#/',
            type: 'array',
            schema: {
              type: 'array',
              allOf: [
                {
                  type: 'array',
                  enum: [
                    [],
                    [],
                    []
                  ]
                }
              ]
            }
          },
          elements: {
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `allOf` (with an `array` type with `anyOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
          },
          elements: {
            field: {
              id: '#/'
            }
          }
        }
        )
    })

    it('transforms `array` type schemas with `allOf` (with an `array` type with `oneOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
          },
          elements: {
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms `array` type schemas with `allOf` (with an `array` type with `allOf`)', () => {
      /**
       *  @type {SchemaType}
       */
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
            uri: '#/',
            type: 'array',
            schema: {
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
