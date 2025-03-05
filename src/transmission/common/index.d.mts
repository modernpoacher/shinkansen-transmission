export type ObjectLiteralType = TransmissionTypes.ObjectLiteralType
export type ObjectType = TransmissionTypes.ObjectType

export type MemberArrayType = TransmissionTypes.MemberArrayType
export type MemberType = TransmissionTypes.MemberType

export type StringMetaType = TransmissionTypes.Transmission.StringMetaType
export type NumberMetaType = TransmissionTypes.Transmission.NumberMetaType
export type ArrayMetaType = TransmissionTypes.Transmission.ArrayMetaType
export type ObjectMetaType = TransmissionTypes.Transmission.ObjectMetaType
export type BooleanMetaType = TransmissionTypes.Transmission.BooleanMetaType
export type NullMetaType = TransmissionTypes.Transmission.NullMetaType

export type StringElementsType = TransmissionTypes.Transmission.StringElementsType
export type NumberElementsType = TransmissionTypes.Transmission.NumberElementsType
export type ArrayElementsType = TransmissionTypes.Transmission.ArrayElementsType
export type ObjectElementsType = TransmissionTypes.Transmission.ObjectElementsType
export type BooleanElementsType = TransmissionTypes.Transmission.BooleanElementsType
export type NullElementsType = TransmissionTypes.Transmission.NullElementsType

export type EnumType = TransmissionTypes.EnumType
export type OneOfType = TransmissionTypes.OneOfType
export type AnyOfType = TransmissionTypes.AnyOfType
export type FieldType = TransmissionTypes.FieldType

export type SchemaType = TransmissionTypes.SchemaType

export type StringSchemaType = TransmissionTypes.StringSchemaType
export type NumberSchemaType = TransmissionTypes.NumberSchemaType
export type ArraySchemaType = TransmissionTypes.ArraySchemaType
export type ObjectSchemaType = TransmissionTypes.ObjectSchemaType
export type BooleanSchemaType = TransmissionTypes.BooleanSchemaType
export type NullSchemaType = TransmissionTypes.NullSchemaType

export type ValuesType = TransmissionTypes.ValuesType
export type ParamsType = TransmissionTypes.ParamsType

export function isObject (v?: unknown): v is (Record<PropertyKey, MemberType | MemberArrayType> | Record<PropertyKey, never>)
export function isArray (v?: unknown): v is (MemberArrayType)
export function isPrimitive (v?: unknown): v is string | number | boolean | null

export function isSchema (v?: SchemaType | object): v is SchemaType
export function isStringSchema (schema?: SchemaType): schema is StringSchemaType
export function isNumberSchema (schema?: SchemaType): schema is NumberSchemaType
export function isArraySchema (schema?: SchemaType): schema is ArraySchemaType
export function isObjectSchema (schema?: SchemaType): schema is ObjectSchemaType
export function isBooleanSchema (schema?: SchemaType): schema is BooleanSchemaType
export function isNullSchema (schema?: SchemaType): schema is NullSchemaType

export function getTitle (schema?: SchemaType): { title: string } | ObjectLiteralType
export function getDescription (schema?: SchemaType): { description: string } | ObjectLiteralType
export function getIsReadOnly (schema?: SchemaType): { readOnly: boolean } | ObjectLiteralType
export function getIsWriteOnly (schema?: SchemaType): { writeOnly: boolean } | ObjectLiteralType

export function getSelectedItems (values?: ValuesType, uri?: string): Array<string | number | boolean | null>

export function isParentUri (parentUri?: string, uri?: string): boolean

export function getMetaProps (params?: ParamsType, uri?: string): StringMetaType | NumberMetaType | ArrayMetaType | ObjectMetaType | BooleanMetaType | NullMetaType | Record<string, never>
export function hasMetaDefaultValue (schema?: SchemaType): boolean
export function getMetaDefaultValue (schema?: SchemaType): { defaultValue: string } | ObjectLiteralType
export function hasMetaValue (values?: ValuesType, uri?: string, schema?: SchemaType): boolean
export function getMetaValue (values?: ValuesType, uri?: string, schema?: SchemaType): { value: string } | ObjectLiteralType

export function transformToValue (schema?: MemberType): MemberType | undefined

export function getFindByKey (parentUri: string, uri: string): (key: string | number) => boolean
export function getFindByIndex (parentUri: string, uri: string): (item: SchemaType, index: number) => boolean
export function getFindByValue (value?: MemberType): (item?: MemberType | MemberArrayType) => boolean
export function getFindByEqual (value?: MemberType): (item?: MemberType | MemberArrayType) => boolean

export function toString (value?: MemberType): string

export function getSchemaFromItems (schema?: { items?: SchemaType | SchemaType[] }, parentUri?: string, uri?: string): SchemaType | undefined
export function getSchemaFromProperties (schema?: { properties?: Record<string, SchemaType> }, parentUri?: string, uri?: string): SchemaType | undefined

export function transformIndexToValueByFindValue (array: MemberArrayType, value?: MemberType): string
export function transformIndexToValueByFindEqual (array: MemberArrayType, value?: MemberType): string

export function findIndexByValue (array: MemberArrayType, value?: MemberType): number
export function findIndexByEqual (array: MemberArrayType, value?: MemberType): number

export function hasValue (values?: ValuesType, uri?: string, schema?: SchemaType): boolean
export function getValue (values?: ValuesType, uri?: string, schema?: SchemaType): string

export function getElementsProps (params?: ParamsType, uri?: string): StringElementsType | NumberElementsType | ArrayElementsType | ObjectElementsType | BooleanElementsType | NullElementsType | Record<string, never>

export function getElementsFieldPropsForEnum (params?: ParamsType, uri?: string): EnumType | ObjectLiteralType
export function getElementsFieldPropsForOneOf (params?: ParamsType, uri?: string): OneOfType | ObjectLiteralType
export function getElementsFieldPropsForAnyOf (params?: ParamsType, uri?: string): AnyOfType | ObjectLiteralType
export function getElementsFieldPropsForAllOf (params?: ParamsType, uri?: string): FieldType | ObjectLiteralType
export function getElementsFieldProps (params?: ParamsType, uri?: string): FieldType | ObjectLiteralType
export function getElementsFieldValue (values?: ValuesType, uri?: string, schema?: SchemaType): { value: string } | ObjectLiteralType

export function hasEnum (schema?: { enum?: MemberArrayType }): schema is { enum: MemberArrayType }

declare function getEnum (schema: { enum: MemberArrayType }): MemberArrayType
declare function getEnum (schema?: { enum?: MemberArrayType }): MemberArrayType | undefined

export { getEnum }

export function hasConst (schema?: { const?: MemberType }): schema is { const: MemberType }

declare function getConst (schema: { const: MemberType }): MemberType
declare function getConst (schema?: { const?: MemberType }): MemberType | undefined

export { getConst }

export function hasDefault (schema?: { default?: MemberType }): schema is { default: MemberType }

declare function getDefault (schema: { default: MemberType }): MemberType
declare function getDefault (schema?: { default?: MemberType }): MemberType | undefined

export { getDefault }

export function hasAnyOf (schema?: { anyOf?: MemberArrayType }): schema is { anyOf: MemberArrayType }

declare function getAnyOf (schema: { anyOf: MemberArrayType }): MemberArrayType
declare function getAnyOf (schema?: { anyOf?: MemberArrayType }): MemberArrayType | undefined

export { getAnyOf }

export function hasOneOf (schema?: { oneOf?: MemberArrayType }): schema is { oneOf: MemberArrayType }

declare function getOneOf (schema: { oneOf: MemberArrayType }): MemberArrayType
declare function getOneOf (schema?: { oneOf?: MemberArrayType }): MemberArrayType | undefined

export { getOneOf }

export function hasAllOf (schema?: { allOf?: MemberArrayType }): schema is { allOf: MemberArrayType }

declare function getAllOf (schema: { allOf: MemberArrayType }): MemberArrayType
declare function getAllOf (schema?: { allOf?: MemberArrayType }): MemberArrayType | undefined

export { getAllOf }

export function getUri (uri?: string, resource?: string | number): string

export function normaliseUri (uri?: string): string

export function getMin (schema?: { minimum?: number }): { min: number } | ObjectLiteralType
export function getMax (schema?: { maximum?: number }): { max: number } | ObjectLiteralType

export function getMinLength (schema?: { minLength?: number }): { minLength: number } | ObjectLiteralType
export function getMaxLength (schema?: { maxLength?: number }): { maxLength: number } | ObjectLiteralType

export function getMinItems (schema?: { minItems?: number }): { minItems: number } | ObjectLiteralType
export function getMaxItems (schema?: { maxItems?: number }): { maxItems: number } | ObjectLiteralType

export function getHasUniqueItems (schema?: { uniqueItems?: boolean }): { hasUniqueItems: boolean } | ObjectLiteralType

export function getMinContains (schema?: { minContains?: number }): { minContains: number } | ObjectLiteralType
export function getMaxContains (schema?: { maxContains?: number }): { maxContains: number } | ObjectLiteralType

export function getMinProperties (schema?: { minProperties?: number }): { minProperties: number } | ObjectLiteralType
export function getMaxProperties (schema?: { maxProperties?: number }): { maxProperties: number } | ObjectLiteralType

export function getIsExclusiveMin (schema?: { exclusiveMinimum?: boolean }): { isExclusiveMin: boolean } | ObjectLiteralType
export function getIsExclusiveMax (schema?: { exclusiveMaximum?: boolean }): { isExclusiveMax: boolean } | ObjectLiteralType

export function getPattern (schema?: { pattern?: RegExp }): { pattern: RegExp } | ObjectLiteralType

export function getStep (schema?: { multipleOf?: number }): { step: number } | ObjectLiteralType
