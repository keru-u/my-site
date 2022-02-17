/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { Box, Container, ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

import theme from '../../src/theme/theme'
import { Work } from '../molecules/Work'

type LayoutProps = {
  children?: ReactNode
  title: string
  description: string
}

export const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7d9661" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Reggae+One&display=optional"
        />
        <meta name="msapplication-TileColor" content="#7d9661" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      </Head>
      <main>
        <ChakraProvider theme={theme}>
          <Container maxW="container.md">
            <Box ml={1} mr={1} borderRadius="md" mt={0} mb={0} bg="white">
              <Box m={1} p={1} bg="red.100">
                {children}
                <Box m={8} bg="white" borderRadius="md" p={5} shadow="md">
                  <Work
                    href="https://mobile.twitter.com/keru_utaware"
                    title="Twitter：@keru_utaware"
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </ChakraProvider>
      </main>
    </>
  )
}

export default Layout
