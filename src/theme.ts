// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // bg: "white", // make sure background is white
        color: "gray.800",
      },
      nav: {
        bg: "white", // navbar background
      },
    },
  },
  colors: {
    yellow: {
      500: "#FACC15", // change Chakra's default yellow
    },
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
          color: "blue.500",
        },
        _activeLink: {
          color: "blue.600", // instead of yellow for active
        },
      },
    },
  },
});

export default theme;
