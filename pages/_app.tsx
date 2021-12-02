import React from 'react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from 'layout/Layout'
import { useMount } from 'hooks/useMount'
import { setCSSVariableVh } from 'utils/utils'
import theme from 'theme'

import 'styles/globals.scss'
import Head from 'next/head'
import { SWRConfig } from 'swr'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	useMount(() => {
		window.addEventListener('resize', setCSSVariableVh)
		return () => window.removeEventListener('resize', setCSSVariableVh)
	})
	
  return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<ChakraProvider theme={theme}>
				<SWRConfig value={{ fetcher: (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json()) }}>
					<Layout childKey={router.route}>
						<Component {...pageProps} />
					</Layout>
				</SWRConfig>
			</ChakraProvider>
		</>
	)
}

export default MyApp
