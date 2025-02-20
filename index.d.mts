declare global {
  namespace TransmissionTypes {
    export type ObjectLiteralType = Record<PropertyKey, never>
    export type ObjectType = Record<PropertyKey, unknown>
    export type ArrayLiteralType = never[]
    export type ArrayType = unknown[]

    export type ItemsType = string[] | number[] | object[] | boolean[] | null[]

    export type SelectedItemsType = Array<string | number | boolean | null>

    export interface EnumType {
      id: string
      name?: string
      items?: ItemsType
      selectedItems?: SelectedItemsType
    }

    export interface AnyOfType {
      id: string
      name?: string
      items?: ItemsType
      selectedItems?: SelectedItemsType
    }

    export interface OneOfType {
      id: string
      name?: string
      items?: ItemsType
      selectedItems?: SelectedItemsType
    }

    export interface FieldType {
      id: string
      name?: string
      items?: ItemsType
      selectedItems?: SelectedItemsType
      value?: string | number | boolean | null | object | ItemsType
      defaultValue?: string | number | boolean | null | object | ItemsType
    }

    export interface SchemaType {
      $id?: string
      $schema?: string
      type?: string
      title?: string
      description?: string
      required?: string[]
      readOnly?: boolean
      writeOnly?: boolean
      const?: string | number | object | boolean | null
      default?: string | number | object | boolean | null
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
      minContains?: number
      maxContains?: number
      minProperties?: number
      maxProperties?: number
      exclusiveMinimum?: boolean
      exclusiveMaximum?: boolean
      multipleOf?: number
      items?: SchemaType | SchemaType[]
      properties?: Record<string, SchemaType>
      pattern?: RegExp
    }

    export interface StringSchemaType extends SchemaType {}

    export interface NumberSchemaType extends SchemaType {}

    export interface ArraySchemaType extends SchemaType {}

    export interface ObjectSchemaType extends SchemaType {}

    export interface BooleanSchemaType extends SchemaType {}

    export interface NullSchemaType extends SchemaType {}

    /**
     *  String keys with string or string array values
     */
    export type ValuesType = Record<string, string | string[]> | Record<string, never>

    interface MetaType extends ObjectType {
      parentUri?: string
      uri?: string
      selectedItems?: SelectedItemsType
      items?: ItemsType
      item?: number
    }

    interface ElementsType extends ObjectType {
      title?: string
      description?: string
    }

    export namespace Transmission {
      export interface StringMetaType extends MetaType {
        minLength?: number
        maxLength?: number
        pattern?: RegExp
        defaultValue?: string
      }

      export interface NumberMetaType extends MetaType {
        min?: number
        max?: number
        step?: number
        isExclusiveMin?: boolean
        isExclusiveMax?: boolean
      }

      export interface ArrayMetaType extends MetaType {}

      export interface ObjectMetaType extends MetaType {}

      export interface BooleanMetaType extends MetaType {}

      export interface NullMetaType extends MetaType {}

      export interface StringElementsType extends ElementsType {
        field?: FieldType
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      export interface NumberElementsType extends ElementsType {
        field?: FieldType
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      export interface ArrayElementsType extends ElementsType {
        field?: FieldType
        fields?: Array<{
          meta?: MetaType
          elements?: ElementsType
        }>
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      export interface ObjectElementsType extends ElementsType {
        field?: FieldType
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      export interface BooleanElementsType extends ElementsType {
        field?: FieldType
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      export interface NullElementsType extends ElementsType {
        field?: FieldType
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      interface TransmissionType {
        meta?: StringMetaType
        elements?: StringElementsType
      }

      export interface StringType {
        meta?: StringMetaType
        elements?: StringElementsType
      }

      export interface NumberType {
        meta?: NumberMetaType
        elements?: NumberElementsType
      }

      export interface ArrayType {
        meta?: ArrayMetaType
        elements?: ArrayElementsType
      }

      export interface ObjectType {
        meta?: ObjectMetaType
        elements?: ObjectElementsType
      }

      export interface BooleanType {
        meta?: BooleanMetaType
        elements?: BooleanElementsType
      }

      export interface NullType {
        meta?: NullMetaType
        elements?: NullElementsType
      }
    }

    export namespace Zashiki {
      interface ZashikiMetaType extends MetaType {
        type?: string
        schema?: SchemaType
        value?: string
        component?: string
      }

      interface ZashikiElementsType extends ElementsType {
        title?: string
        description?: string
      }

      export interface StringMetaType extends ZashikiMetaType {
        minLength?: number
        maxLength?: number
        pattern?: RegExp
        defaultValue?: string
      }

      export interface NumberMetaType extends ZashikiMetaType {
        min?: number
        max?: number
        step?: number
        isExclusiveMin?: boolean
        isExclusiveMax?: boolean
      }

      export interface ArrayMetaType extends ZashikiMetaType {}

      export interface ObjectMetaType extends ZashikiMetaType {}

      export interface BooleanMetaType extends ZashikiMetaType {}

      export interface NullMetaType extends ZashikiMetaType {}

      export interface StringElementsType extends ZashikiElementsType {
        field?: FieldType
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      export interface NumberElementsType extends ZashikiElementsType {
        field?: FieldType
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      export interface ArrayElementsType extends ZashikiElementsType {
        field?: FieldType
        fields?: Array<{
          meta?: ZashikiMetaType
          elements?: ZashikiElementsType
        }>
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      export interface ObjectElementsType extends ZashikiElementsType {
        field?: FieldType
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      export interface BooleanElementsType extends ZashikiElementsType {
        field?: FieldType
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      export interface NullElementsType extends ZashikiElementsType {
        field?: FieldType
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
      }

      interface ZashikiType {
        meta?: ZashikiMetaType
        elements?: ZashikiElementsType
      }

      export interface StringType {
        meta?: StringMetaType
        elements?: StringElementsType
      }

      export interface NumberType {
        meta?: NumberMetaType
        elements?: NumberElementsType
      }

      export interface ArrayType {
        meta?: ArrayMetaType
        elements?: ArrayElementsType
      }

      export interface ObjectType {
        meta?: ObjectMetaType
        elements?: ObjectElementsType
      }

      export interface BooleanType {
        meta?: BooleanMetaType
        elements?: BooleanElementsType
      }

      export interface NullType {
        meta?: NullMetaType
        elements?: NullElementsType
      }
    }

    export type ParamsType = Record<string, Transmission.StringType | Transmission.NumberType | Transmission.ArrayType | Transmission.ObjectType | Transmission.BooleanType | Transmission.NullType> & {
      parentUri?: string
      uri?: string
      key?: string
      index?: number
      required?: string[]
      fields?: Array<Transmission.StringType | Transmission.NumberType | Transmission.ArrayType | Transmission.ObjectType | Transmission.BooleanType | Transmission.NullType>
    }

    /**
     *  A JSON Schema document
     */
    export type DocumentType = string | number | object | boolean | null | string[] | number[] | object[] | boolean[] | null[]

    /**
     *  String keys with string or string array values
     */
    export type HashType = Record<string, string | string[]> | Record<string, never>
  }
}

export {}
