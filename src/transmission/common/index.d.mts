declare module '#transmission/transmission/common' {
  type ObjectLiteralType = Zashiki.ObjectLiteralType
  type ObjectType = Zashiki.ObjectType
  type ArrayLiteralType = Zashiki.ArrayLiteralType
  type ArrayType = Zashiki.ArrayType

  type SchemaType = Zashiki.SchemaType

  export function isObject (v: unknown): boolean
  export function isArray (v: unknown): boolean
  export function isPrimitive (v: unknown): boolean
  export function isSchema (v: SchemaType | undefined): boolean
  export function isStringSchema (schema: SchemaType | undefined): boolean
  export function isNumberSchema (schema: SchemaType | undefined): boolean
  export function isArraySchema (schema: SchemaType | undefined): boolean
  export function isObjectSchema (schema: SchemaType | undefined): boolean
  export function isBooleanSchema (schema: SchemaType | undefined): boolean
  export function isNullSchema (schema: SchemaType | undefined): boolean

  export function getTitle (schema: SchemaType | undefined): { title: string } | ObjectLiteralType
  export function getDescription (schema: SchemaType | undefined): { description: string } | ObjectLiteralType
  export function getIsReadOnly (schema: SchemaType | undefined): { readOnly: boolean } | ObjectLiteralType
  export function getIsWriteOnly (schema: SchemaType | undefined): { writeOnly: boolean } | ObjectLiteralType

  export function getSelectedItems (values: ObjectType | ObjectLiteralType, uri: string | undefined): ArrayType

  export function isParentUri (parentUri: string | undefined, uri: string | undefined): boolean

  export function getMetaProps (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType
  export function getMetaDefaultValue (schema: SchemaType | undefined): { defaultValue: string } | ObjectLiteralType
  export function hasMetaValue (values: ObjectType | ObjectLiteralType, uri: string | undefined, schema: SchemaType | undefined): boolean
  export function getMetaValue (values: ObjectType | ObjectLiteralType, uri: string | undefined, schema: SchemaType | undefined): { value: string } | ObjectLiteralType

  export function transformValue (schema: SchemaType): SchemaType | ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType | undefined

  export function findByKey (parentUri: string | undefined, uri: string | undefined): (key: string) => boolean
  export function findByIndex (parentUri: string | undefined, uri: string | undefined): (schema: SchemaType, index: number) => boolean
  export function findByValue (value: unknown): (schema: SchemaType) => boolean
  export function findByEqual (value: unknown): (schema: SchemaType) => boolean

  export function toString (value: unknown): string

  export function getObject (value: { properties: ObjectType /* object */ }, parentUri: string | undefined, uri: string | undefined): ObjectType
  export function getArray (value: { items: ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType /* array or object */ }, parentUri: string | undefined, uri: string | undefined): ArrayType
  export function getSchema (schema: SchemaType | ObjectType, parentUri: string | undefined, uri: string | undefined): ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType | SchemaType

  export function transformValueIndexFor (array: ArrayType, value: unknown): string
  export function transformEqualIndexFor (array: ArrayType, value: unknown): string

  export function hasValue (values: ObjectType | ObjectLiteralType, uri: string | undefined, schema: SchemaType | undefined): boolean
  export function getValue (values: ObjectType | ObjectLiteralType, uri: string | undefined, schema: SchemaType | undefined): string

  export function getValueForEnum (v: string | number, schema: SchemaType): string
  export function getIndexForEnum (values: ObjectType | ObjectLiteralType, parentUri: string | undefined, uri: string | undefined, schema: SchemaType | undefined): number

  export function getValueForAnyOf (v: string | number, schema: SchemaType): string
  export function getIndexForAnyOf (values: ObjectType | ObjectLiteralType, parentUri: string | undefined, uri: string | undefined, schema: SchemaType | undefined): number

  export function getValueForOneOf (v: string | number, schema: SchemaType): string
  export function getIndexForOneOf (values: ObjectType | ObjectLiteralType, parentUri: string | undefined, uri: string | undefined, schema: SchemaType | undefined): number

  export function getElementsProps (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsTitleProps (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsDescriptionProps (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType

  export function getElementsFieldPropsForEnum (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsFieldPropsForOneOf (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsFieldPropsForAnyOf (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsFieldPropsForAllOf (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType

  export function getElementsFieldProps (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsFieldValue (values: ObjectType | ObjectLiteralType, uri: string | undefined, schema: SchemaType | undefined): { value: string } | ObjectLiteralType

  export function hasEnum (schema: SchemaType | undefined): boolean
  export function getEnum (schema: SchemaType | undefined): ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType

  export function hasConst (schema: SchemaType | undefined): boolean
  export function getConst (schema: SchemaType | undefined): unknown

  export function hasDefault (schema: SchemaType | undefined): boolean
  export function getDefault (schema: SchemaType | undefined): unknown

  export function hasAnyOf (schema: SchemaType | undefined): boolean
  export function getAnyOf (schema: SchemaType | undefined): ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType

  export function hasOneOf (schema: SchemaType | undefined): boolean
  export function getOneOf (schema: SchemaType | undefined): ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType

  export function hasAllOf (schema: SchemaType | undefined): boolean
  export function getAllOf (schema: SchemaType | undefined): ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType

  export function getUri (uri: string | undefined, resource: string | undefined): string

  export function normaliseUri (uri: string | undefined): string

  export function getMin (schema: SchemaType | undefined): { min: number } | ObjectLiteralType
  export function getMax (schema: SchemaType | undefined): { max: number } | ObjectLiteralType

  export function getMinLength (schema: SchemaType | undefined): { minLength: number } | ObjectLiteralType
  export function getMaxLength (schema: SchemaType | undefined): { maxLength: number } | ObjectLiteralType

  export function getMinItems (schema: SchemaType | undefined): { minItems: number } | ObjectLiteralType
  export function getMaxItems (schema: SchemaType | undefined): { maxItems: number } | ObjectLiteralType

  export function getHasUniqueItems (schema: SchemaType | undefined): { hasUniqueItems: boolean } | ObjectLiteralType

  export function getMinContains (schema: SchemaType | undefined): { minContains: number } | ObjectLiteralType
  export function getMaxContains (schema: SchemaType | undefined): { maxContains: number } | ObjectLiteralType

  export function getMinProperties (schema: SchemaType | undefined): { minProperties: number } | ObjectLiteralType
  export function getMaxProperties (schema: SchemaType | undefined): { maxProperties: number } | ObjectLiteralType

  export function getIsExclusiveMin (schema: SchemaType | undefined): { isExclusiveMin: boolean } | ObjectLiteralType
  export function getIsExclusiveMax (schema: SchemaType | undefined): { isExclusiveMax: boolean } | ObjectLiteralType

  export function getPattern (schema: SchemaType | undefined): { pattern: string } | ObjectLiteralType

  export function getStep (schema: SchemaType | undefined): { step: number } | ObjectLiteralType
}

declare module 'shinkansen-transmission/transmission/common' {
  export * from '#transmission/transmission/common'
}
