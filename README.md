## `shinkansen-transmission`

Shinkansen generates JSON Schema valid documents from user submissions with `<html />` forms.

# Transmission

_Transmission_ transforms HTTP `POST` data into JSON Schema valid `JSON` documents (and back again).

It can also translate JSON Schema into Zashiki description format describing `<html />` forms.

## Installation

```bash
npm i -P shinkansen-transmission
```

Your schema should be dereferenced _before_ it is transformed with _Transmission_ (we recommend [json-schema-ref-parser](https://www.npmjs.com/package/json-schema-ref-parser)).

### `fromHashToDocument`

```javascript
const document = fromHashToDocument(values, rootSchema)
```

For applications accepting `POST` data.

The transformer walks the `rootSchema` and maps fields in `values` to another structure, which it returns.

- `values` is a hash of keys and values
- `rootSchema` is a JSON Schema

The return value is an object valid according to the Schema.

`POST` data is generally represented as a hash of keys and values, where the values are all strings, or arrays containing strings. `fromHashToDocument` transforms that hash into a document.

##### `rootSchema`

```javascript
{
  type: 'object',
  properties: {
    company: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        publisher: {
          type: 'object',
          properties: {
            firstName: {
              type: 'string'
            },
            lastName: {
              type: 'string'
            },
            age: {
              type: 'number'
            }
          }
        }
      }
    },
    active: {
      type: 'boolean'
    }
  }
}
```

##### `values`

An object.

```javascript
{
  'company-name': 'Marvel',
  'company-publisher-firstName': 'Stan',
  'company-publisher-lastName': 'Lee',
  'company-publisher-age': '96',
  active: 'true'
}
```

##### `document`

An object.

```javascript
{
  company: {
    name: 'Marvel',
    publisher: {
      firstName: 'Stan',
      lastName: 'Lee',
      age: 96
    }
  },
  active: true
}
```


### `fromDocumentToHash`

```javascript
const values = fromDocumentToHash(document, rootSchema)
```

For applications accepting `POST` data.

The transformer walks the `document` and maps its fields to another structure, which it returns.

- `document` is an object valid according to the Schema
- `rootSchema` is a JSON Schema

The return value is a hash of keys and values, where the values are all strings, or arrays containing strings.

`POST` data is generally represented as a hash of keys and values, where the values are all strings, or arrays containing strings. `fromDocumentToHash` transforms a document into that hash.

##### `document`

An object.

```javascript
{
  company: {
    name: 'Marvel',
    publisher: {
      firstName: 'Stan',
      lastName: 'Lee',
      age: 96
    }
  },
  active: true
}
```

##### `rootSchema`

```javascript
{
  type: 'object',
  properties: {
    company: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        publisher: {
          type: 'object',
          properties: {
            firstName: {
              type: 'string'
            },
            lastName: {
              type: 'string'
            }
            age: {
              type: 'number'
            }
          }
        }
      }
    },
    active: {
      type: 'boolean'
    }
  }
}
```

##### `values`

A hash.

```javascript
{
  'company-name': 'Marvel',
  'company-publisher-firstName': 'Stan',
  'company-publisher-lastName': 'Lee',
  'company-publisher-age': '96',
  active: 'true'
}
```

### `toZashiki`

```javascript
const zashiki = toZashiki(rootSchema, values, params)
```

The transformer walks the `rootSchema` and maps fields in `values` and `params` to Zashiki description format, which it returns.

- `rootSchema` is a JSON Schema
- `values` is a document valid according to the Schema
- `params` are any other parameters for the transformer

The return value is an object with the fields `meta` and `elements`.

As you might expect, `meta` contains fields _about_ the Schema, while `elements` contains fields to be rendered as HTML. (_Transmission_ doesn't express any opinion on what those elements are to be, but assumes that a `field` will be rendered as an HTML `<form />` element or some component which behaves like one.)

#### Transformed structure

```javascript
{
  meta: {
    uri: String,
    name: String,
    type: String /* One of "object" "array" "string" "number" "boolean" "null" */,
    schema: Object,
    rootSchema: Object,
    isRequired: Boolean,
    defaultValue: /* Per `type` */,
    value: /* Per `type` */,
  },
  elements: {
    title: String,
    description: String,
    field: {
      isRequired: Boolean,
      value: /* Per `type` */,
      name: String
    }
  }
}
```

##### `enum`

```javascript
{
  meta: {
    uri: String,
    name: String,
    type: String /* One of "object" "array" "string" "number" "boolean" "null" */,
    schema: Object,
    rootSchema: Object,
    isRequired: Boolean,
    selectedItems: Array
  },
  elements: {
    title: String,
    description: String,
    enum: {
      isRequired: Boolean,
      selectedItems: Array,
      items: Array,
      name: String
    }
  }
}
```

##### `anyOf`

```javascript
{
  meta: {
    uri: String,
    name: String,
    type: String /* One of "object" "array" "string" "number" "boolean" "null" */,
    schema: Object,
    rootSchema: Object,
    isRequired: Boolean,
    selectedItems: Array
  },
  elements: {
    title: String,
    description: String,
    anyOf: {
      isRequired: Boolean,
      selectedItems: Array,
      items: Array,
      name: String
    }
  }
}
```

##### `oneOf`

```javascript
{
  meta: {
    uri: String,
    name: String,
    type: String /* One of "object" "array" "string" "number" "boolean" "null" */,
    schema: Object,
    rootSchema: Object,
    isRequired: Boolean,
    selectedItems: Array
  },
  elements: {
    title: String,
    description: String,
    oneOf: {
      isRequired: Boolean,
      selectedItems: Array,
      items: Array,
      name: String
    }
  }
}
```

##### `allOf`

- `array` or `object`

```javascript
{
  meta: {
    uri: String,
    name: String,
    type: String /* One of "object" "array" "string" "number" "boolean" "null" */,
    schema: Object,
    rootSchema: Object,
    isRequired: Boolean
  },
  elements: {
    title: String,
    description: String,
    fields: Array
  }
}
```

- Any other

```javascript
{
  meta: {
    uri: String,
    name: String,
    type: String /* One of "object" "array" "string" "number" "boolean" "null" */,
    schema: Object,
    rootSchema: Object,
    isRequired: Boolean
  },
  elements: {
    title: String,
    description: String,
    field: Object
  }
}
```

## See also

- [Cogs](https://github.com/modernpoacher/shinkansen-cogs)
- [Sprockets](https://github.com/modernpoacher/shinkansen-sprockets)
- [Gears](https://github.com/modernpoacher/shinkansen-gears)
- [Pinion](https://github.com/modernpoacher/shinkansen-pinion)
- [Engine](https://github.com/modernpoacher/shinkansen-engine)
