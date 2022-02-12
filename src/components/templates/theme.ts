import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'red.900',
        color: 'orange.900',
        fontFamily: 'Kaisei Decol',
      },
    },
  },
})

export default theme
