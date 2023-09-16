import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
        500: "#5352ED",
        main: "#5352ED",
        gray: "#B0B0B0",
        bg: "#2F3542"
    },
    secondary : {
        main: "#2F3542"
    },
    grey: {
      
    },
    hover: {
    }
  },
  fonts: {
    body: `'Montserrat Variable', sans-serif`
  },
  styles: {
    global: () => ({
      body: {
        "bg": "#F7F7F7"
      },
    })
  }
});

export default theme;
