## `@modernpoacher/shinkansen-transmission` 

# Shinkansen Transmission

*Shinkansen Transmission* transforms JSON Schemas into a description of a form for *Zashiki*.

Other tools consume the schema; *Shinkansen Transmission* transforms the schema and *Zashiki* consumes the product of that transformation. This allows the schema both to remain portable and devoted to the validation of data: no additional fields or values for *Zashiki* need be defined on the schema itself.

Your schema should have dereferenced `$ref` fields and any `allOf` fields merged _before_ it is transformed with *Shinkansen Transmission* (we recommend [json-schema-ref-parser](https://www.npmjs.com/package/json-schema-ref-parser) and [json-schema-merge-allof](https://www.npmjs.com/package/json-schema-merge-allof)) but, otherwise, the schema is not modified.

### Installation

```bash
npm i -P @modernpoacher/shinkansen-transmission
```
