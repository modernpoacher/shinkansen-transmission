declare global {
  namespace TransmissionTypes {
    export type ObjectLiteralType = Record<PropertyKey, never>
    export type ObjectType = Record<PropertyKey, unknown>
    export type ArrayLiteralType = never[]
    export type ArrayType = unknown[]

    export type ItemsType = string[] | number[] | object[] | boolean[] | null[] // | SchemaType | SchemaType[]

    export type SelectedItemsType = Array<string | number | boolean | null>

    export interface EnumType {
      id: string
      name?: string
      isRequired?: boolean
      items?: ItemsType
      selectedItems?: SelectedItemsType
    }

    export interface AnyOfType {
      id: string
      name?: string
      isRequired?: boolean
      items?: ItemsType
      selectedItems?: SelectedItemsType
    }

    export interface OneOfType {
      id: string
      name?: string
      isRequired?: boolean
      items?: ItemsType
      selectedItems?: SelectedItemsType
    }

    export interface FieldType {
      id: string
      name?: string
      isRequired?: boolean
      items?: ItemsType
      selectedItems?: SelectedItemsType,
      value?: string | number | boolean | null | object | ItemsType
      defaultValue?: string | number | boolean | null | object | ItemsType
    }

    export interface SchemaType {
      $id?: string
      $schema?: string
      type?: string, // 'string' | 'number' | 'array' | 'object' | 'boolean' | 'null'
      title?: string
      description?: string
      required?: string[],
      readOnly?: boolean
      writeOnly?: boolean
      const?: string | number | object | boolean | null // unknown
      default?: string | number | object | boolean | null // unknown
      enum?: ItemsType
      anyOf?: ItemsType
      oneOf?: ItemsType
      allOf?: ItemsType
      minimum?: number
      maximum?: number
      minLength?: number
      maxLength?: number
      minItems?: number
      maxItems?: number
      uniqueItems?: boolean
      // hasUniqueItems?: boolean
      minContains?: number
      maxContains?: number
      minProperties?: number
      maxProperties?: number
      exclusiveMinimum?: boolean,
      exclusiveMaximum?: boolean,
      // isExclusiveMin?: boolean
      // isExclusiveMax?: boolean
      multipleOf?: number
      items?: SchemaType | SchemaType[]
      properties?: Record<string, SchemaType>
      pattern?: RegExp
    }

    export interface StringSchemaType extends SchemaType {
    }

    export interface NumberSchemaType extends SchemaType {
    }

    export interface ArraySchemaType extends SchemaType {
    }

    export interface ObjectSchemaType extends SchemaType {
    }

    export interface BooleanSchemaType extends SchemaType {
    }

    export interface NullSchemaType extends SchemaType {
    }

    /**
     *  String keys with string or string array values
     */
    export type ValuesType = Record<string, string | string[]> | Record<string, never>

    interface MetaType extends ObjectType {
      parentUri?: string,
      uri?: string,
      selectedItems?: SelectedItemsType,
      items?: ItemsType,
      item?: number,
    }

    export interface StringMetaType extends MetaType {
      minLength?: number
      maxLength?: number
      pattern?: RegExp,
      defaultValue?: string,
    }

    export interface NumberMetaType extends MetaType {
      min?: number
      max?: number
      step?: number,
      isExclusiveMin?: boolean,
      isExclusiveMax?: boolean,
    }

    export interface ArrayMetaType extends MetaType {}

    export interface ObjectMetaType extends MetaType {}

    export interface BooleanMetaType extends MetaType {}

    export interface NullMetaType extends MetaType {}

    interface ElementsType extends ObjectType {
      title?: string,
      description?: string,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType,
      field?: FieldType
    }

    export interface StringElementsType extends ElementsType {
      field?: FieldType,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    export interface NumberElementsType extends ElementsType {
      field?: FieldType,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    export interface ArrayElementsType extends ElementsType {
      fields?: Array<{
        meta?: MetaType,
        elements?: ElementsType
      }>,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    export interface ObjectElementsType extends ElementsType {
      field?: FieldType,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    export interface BooleanElementsType extends ElementsType {
      field?: FieldType,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    export interface NullElementsType extends ElementsType {
      field?: FieldType,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    type TransmissionType = {
      meta?: StringMetaType,
      elements?: StringElementsType
    } | {
      meta?: NumberMetaType,
      elements?: NumberElementsType
    } | {
      meta?: ArrayMetaType,
      elements?: ArrayElementsType
    } | {
      meta?: ObjectMetaType,
      elements?: ObjectElementsType
    } | {
      meta?: BooleanMetaType,
      elements?: BooleanElementsType
    } | {
      meta?: NullMetaType,
      elements?: NullElementsType
    }

    export type ParamsType = Record<string, TransmissionType> & {
      parentUri?: string,
      uri?: string,
      key?: string,
      index?: number,
      required?: string[],
      fields?: TransmissionType[]
    }

    /**
     *  A JSON Schema document
     */
    export type DocumentType = string | number | object | boolean | null | string[] | number[] | object[] | boolean[] | null[]

    /**
     *  String keys with string or string array values
     */
    export type HashType = Record<string, string | string[]> | Record<string, never>

    export interface ZashikiMetaType extends MetaType {
      type?: string,
      schema?: SchemaType,
      value?: string,
      component?: string,
    }

    export interface ZashikiStringMetaType extends ZashikiMetaType {
      minLength?: number
      maxLength?: number
      pattern?: RegExp,
      defaultValue?: string,
    }

    export interface ZashikiNumberMetaType extends ZashikiMetaType {
      min?: number
      max?: number
      step?: number,
      isExclusiveMin?: boolean,
      isExclusiveMax?: boolean,
    }

    export interface ZashikiArrayMetaType extends ZashikiMetaType {}

    export interface ZashikiObjectMetaType extends ZashikiMetaType {}

    export interface ZashikiBooleanMetaType extends ZashikiMetaType {}

    export interface ZashikiNullMetaType extends ZashikiMetaType {}

    export interface ZashikiElementsType extends ElementsType {
      title?: string,
      description?: string,
    }

    export interface ZashikiStringElementsType extends ZashikiElementsType {
      field?: FieldType,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    export interface ZashikiNumberElementsType extends ZashikiElementsType {
      field?: FieldType,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    export interface ZashikiArrayElementsType extends ZashikiElementsType {
      fields?: Array<{
        meta?: ZashikiMetaType,
        elements?: ZashikiElementsType
      }>,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    export interface ZashikiObjectElementsType extends ZashikiElementsType {
      field?: FieldType,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    export interface ZashikiBooleanElementsType extends ZashikiElementsType {
      field?: FieldType,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    export interface ZashikiNullElementsType extends ZashikiElementsType {
      field?: FieldType,
      enum?: EnumType,
      anyOf?: AnyOfType,
      oneOf?: OneOfType
    }

    export interface ZashikiType {
      meta?: ZashikiMetaType,
      elements?: ZashikiElementsType
    }
  }
}

export {}
