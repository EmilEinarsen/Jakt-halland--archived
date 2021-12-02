import * as contentful from 'contentful'
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPADE_ID } from './constants'

export const client = contentful.createClient({
  space: CONTENTFUL_SPADE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})
