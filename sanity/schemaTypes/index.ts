import { type SchemaTypeDefinition } from 'sanity'
import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {blogType} from './postType'
import {authorType} from './authorType'
import {orderType} from './orderType'
import {brandType} from './brandType'
import { productType } from './productType'
import { addressType } from './addressType'
export const schema = {
  types: [blockContentType, categoryType, blogType, authorType, orderType, brandType, productType, addressType],
}
