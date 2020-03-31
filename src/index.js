import common from './transmission/common'
import fromDocumentToFormData from './transmission/from-document-to-form-data'
import fromFormDataToDocument from './transmission/from-form-data-to-document'
import toZashiki from './transmission/to-zashiki'

export default {
  transmission: {
    common,
    fromDocumentToFormData,
    fromFormDataToDocument,
    fromValues
  }
}
