import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "orange.100",
        color: "orange.900"
      }
    }
  }
});

export default theme;