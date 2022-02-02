import Head from "next/head";
import { Link, Heading, Box, Container, ChakraProvider } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ReactNode } from "react";

import theme from "../src/theme/theme";
import { LinkEx } from "./NextLink";

export default function Layout({ children, title, description }: {
    children?: ReactNode
    title: string
    description: string
    }) { return(
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
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

        {/* <nav>
            <Center>
                <Button m={8} bg='white'  borderRadius='md'  p={5}><Link href="/"><a>Home</a></Link></Button>
                <Button m={8} bg='white'  borderRadius='md'  p={5}><Link href="/blog-page"><a>Blog</a></Link></Button>
                <Button m={8} bg='white'  borderRadius='md'  p={5}><Link href="/contact-page"><a >Contact</a></Link></Button>
            </Center>
        </nav> */}
        
        <main>
            <ChakraProvider theme={theme}>
            <Container maxW='container.md'>
            <Box marginLeft={1} marginRight={1} borderRadius="md" marginTop={0} marginBottom={0} bg="white">
            <Box m={1} p={1} bg="red.100">
            {children}
            <Box m={8} bg='white'  borderRadius='md'  p={5} shadow='md'  >
                <Heading size="md">連絡先</Heading><br />
                <LinkEx href={'https://mobile.twitter.com/keru_utaware'}>
                    <Link isExternal>Twitter：@keru_utaware<ExternalLinkIcon mx='2px' /></Link>
                </LinkEx>
            </Box>
            </Box>
            </Box>
            </Container>
            </ChakraProvider>
        </main>
    </div>
)}