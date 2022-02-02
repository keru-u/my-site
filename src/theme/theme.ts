import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "red.900",
        color: "orange.900"
      },
      fonts: {
        heading: `cursive,"Hiragino Kaku Gothic ProN"`,
        body: `cursive,"Hiragino Kaku Gothic ProN"`,
     },
    }
  }
});

export default theme;