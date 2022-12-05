import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { appColors } from "./palette";
import { styles } from "./styles.config";

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const components = {
  Text: {
    variants: {
      // Make a variant, we'll call it `base` here and leave it empty
      base: (props: StyleFunctionProps | Record<string, any>) => ({
        color: mode("secondary.600", "primary.600")(props),
        _hover: {
          bg: "secondary.500",
        },
      }),

      //

      s1: (props: StyleFunctionProps | Record<string, any>) => ({
        fontSize: "md",
        fontWeight: "semibold",
        color: mode("secondary.400", "primary.800")(props),
      }),
      s2: (props: StyleFunctionProps | Record<string, any>) => ({
        fontSize: "sm",
        fontWeight: "regular",
        color: mode("secondary.400", "primary.800")(props),
      }),

      s3: (props: StyleFunctionProps | Record<string, any>) => ({
        fontSize: "xs",
        fontWeight: "regular",
        color: mode("secondary.400", "secondary.50")(props),
      }),

      h2sb: {
        fontSize: "18px",
        fontWeight: "semibold",
      },
    },
  },
  Link: {
    variants: {
      // Make a variant, we'll call it `base` here and leave it empty
      base: (props: StyleFunctionProps | Record<string, any>) => ({
        color: mode("secondary.600", "primary.600")(props),
        _hover: {
          bg: "secondary.500",
        },
      }),

      nav: (props: StyleFunctionProps | Record<string, any>) => ({
        fontSize: "sm",
        color: "primary.50",
      }),
    },
  },
  Button: {
    variants: {
      // Make a variant, we'll call it `base` here and leave it empty
      base: (props: StyleFunctionProps | Record<string, any>) => ({
        bg: mode("primary", "turquoise")(props),
        _hover: {
          bg: "primary.500",
        },
      }),

      secondary: (props: StyleFunctionProps | Record<string, any>) => ({
        bg: mode("primary.50", "secondary.400")(props),
        py: { base: 4, lg: 6 },
        fontSize: "sm",
        fontWeight: "semibold",
        _hover: {
          bg: mode("primary.300", "secondary.300")(props),
        },
      }),
      iconButton: (props: StyleFunctionProps | Record<string, any>) => ({
        bg: mode("wzp.400", "wzg.200")(props),
        color: mode("primary.400", "secondary.600")(props),
        h: 10,
        w: 10,
        rounded: "full",
        _hover: {
          bg: mode("wzp.200", "wzg.400")(props),
        },
      }),
    },
  },
  Input: {
    sizes: {},
    variants: {
      base: (props: StyleFunctionProps | Record<string, any>) => ({
        bg: mode("primary", "secondary.200")(props),

        field: {
          py: "6",
          rounded: "xl",
          fontSize: { base: "md", lg: "sm" },
          color: mode("secondary.400", "primary.400")(props),
          bg: mode("primary.50", "secondary.300")(props),
          _placeholder: {
            color: mode("secondary.100", "secondary.50")(props),
          },
          // ":focus": {
          //   bg: mode("primary.500", "secondary.300")(props),
          // },
        },
      }),
    },
    defaultProps: {
      variant: null, // null here
    },
  },
};

const theme = extendTheme({
  colors: appColors,
  components,
  styles,
  config,
});

export default theme;
