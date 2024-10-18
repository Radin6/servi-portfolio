import {extendTheme} from "@chakra-ui/react";

const Input = {
  variants: {
    gray: {
      bg: "whiteAlpha.200",
      width: "320px",
      height: "44px",
      top: "143.419921875px",
      padding: "13px 11px 13px 11px",
      borderRadius: "4px",
    },
    solidBlack: {
      field: {
        fontSize: "xs",
        outlineColor: "gray.soft",
        outlineWidth: "1px",
        borderWidth: "0px",
        outlineOffset: "0px",
        outlineStyle: "solid",
        bg: "searchbar.bg",
        color: "white",
      },
    },
    outlineWhite: {
      field: {
        borderWidth: "0px",
        bg: "transparent",
        color: "gray.300",
        fontSize: "20",
        _focus: {
          outlineColor: "white",
        },
        outlineColor: "gray.400",
        outlineWidth: "1px",
        outlineOffset: "0px",
        outlineStyle: "solid",
        transition: "outline 0.2s linear",
      },
    },
  },
};

export default Input;
