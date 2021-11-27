import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ComponentType, ReactElement, ReactNode, ReactSVG } from 'react'
import { Nullable } from 'types'

declare global {
	type PageMeta = {
		title: string
		description: string
	}
	type Page<T = {}, U = T> = NextPage<T, U>
	type PageWithMeta<T = {}, U = T> = Page<T, U> & {
		meta: PageMeta
	}
	type AppPropsWithMeta<T = {}> =
		AppProps<T>
		& {
			Component?: Page<T> & {
				meta?: PageMeta
			}
		}
}
