import * as contentful from 'contentful'
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPADE_ID } from './constants'

export const client = contentful.createClient({
  space: CONTENTFUL_SPADE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

export type Error = {
	status: number,
	message: string,
	statusText: string,
}

export const validateError = (error: any): error is Error => 
	'status' in error && typeof error.status === 'number' 
	&& 'message' in error && typeof error.status === 'string'
	&& 'statusText' in error && typeof error.status === 'string'
