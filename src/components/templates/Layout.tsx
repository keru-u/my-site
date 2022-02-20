import { Box, Container, ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

import theme from './theme'
import { Work } from '../molecules/Work'
import { HeadEx } from '../molecules/HeadEx'

type LayoutProps = {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeadEx />
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
