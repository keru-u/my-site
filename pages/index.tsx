import type { NextPage } from 'next'
import Head from 'next/head'
import { Link, Box,Text,Heading,Container, Button, ChakraProvider } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

import theme from "../theme/theme";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>けるのうたわれ倉庫</title>
        <meta name="description" content="作ったものを置く予定です。工事中です。" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7d9661" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#7d9661" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      </Head>
      <ChakraProvider theme={theme}>
      <Container maxW='container.md'>
      <Box m={8} bg='white'  borderRadius='md'  p={5} shadow='md'  >
      <Heading>けるのうたわれ倉庫</Heading>
      <br />
      <Text fontSize='md'>
        工事中です。<br />
        １月中に更新されるはず(願望)
      </Text>
      <br />
      <br />
      <Link  href='https://github.com/keru-u/my-site/projects/1' isExternal>進捗状況：GitHub<ExternalLinkIcon mx='2px' /></Link>
      </Box>
      </Container>
      </ChakraProvider>
    </div>
  )
}

export default Home
