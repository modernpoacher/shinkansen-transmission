## `shinkansen-transmission`

# Shinkansen Transmission

*Shinkansen Transmission* transforms JSON Schemas into a description of a form for *Zashiki Karakuri*.

Your schema should have dereferenced `$ref` fields and any `allOf` fields merged _before_ it is transformed with *Shinkansen Transmission* (we recommend [json-schema-ref-parser](https://www.npmjs.com/package/json-schema-ref-parser) and [json-schema-merge-allof](https://www.npmjs.com/package/json-schema-merge-allof)).

### Installation

```bash
npm i -P shinkansen-transmission
```

### `toZashiki`

```javascript
const zashiki = toZashiki(rootSchema, values, params)
```

The transformer walks the `rootSchema` and maps fields in `values` and `params` to another structure, which it returns.

- `rootSchema` is a JSON Schema
- `values` is a document valid according to the Schema
- `params` are any other parameters for the transformer

The return value is an object with the fields `meta` and `elements`. 

As you might expect, `meta` contains fields _about_ the Schema, while `elements` contains fields to be rendered as HTML. (*Shinkansen Transmission* doesn't express any opinion on what those elements are to be, but assumes that a `field` will be rendered as an HTML `<form />` element or some component which behaves like one.)

#### Transformed structure

```javascript
{
  meta: {
    uri: String,
    name: String,
    type: String /* One of "object" "array" "string" "number" "boolean" "null" */,
    schema: Object,
    rootSchema: Object,
    required: Boolean,
    defaultValue: /* Per `type` */,
    value: /* Per `type` */,
  },
  elements: {
    title: String,
    description: String,
    field: {
      required: Boolean,
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
    required: Boolean,
    selectedIndex: Number
  },
  elements: {
    title: String,
    description: String,
    oneOf: {
      required: Boolean,
      selectedIndex: Number,
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
    required: Boolean,
    selected: String,
  },
  elements: {
    title: String,
    description: String,
    oneOf: {
      required: Boolean,
      selected: Array /* of `String` */,
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
    required: Boolean,
    selected: Number,
  },
  elements: {
    title: String,
    description: String,
    oneOf: {
      required: Boolean,
      selected: Number,
      items: Array,
      name: String
    }
  }
}
```

### `fromHashToDocument`

```javascript
const document = fromHashToDocument(rootSchema, values)
```

For applications accepting `POST` data.

The transformer walks the `rootSchema` and maps fields in `values` to another structure, which it returns.

- `rootSchema` is a JSON Schema
- `values` is a hash of keys and values

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
  'active': 'true'
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
  'active': 'true'
}
```
