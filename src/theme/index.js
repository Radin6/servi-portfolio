import {extendTheme} from "@chakra-ui/react";

import Button from "./components/button.js";
import Link from "./components/link.js";
import Text from "./components/text.js";
import Input from "./components/input.js";
import Badge from "./components/badge.js";
import Card from "./components/card.js";
import Stepper from "./components/stepper.js";

const brand = {
  mainText: "#D2D7E0",
  secondaryText: "#757A8D",
  smallText: "#484E62",
  main: "#080B11",
  secondary: "#0E1118",
  secondary_hover: "#1B202C",
  divider: "#11141D",
  border: "#161A23",
  dominant: "#6147A9",
};
const main = extendTheme({
  fonts: {
  },
  styles: {
    global: {
      html: {
        margin: 0,
        padding: 0,
      },
      "*": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        listStyleType: "none",
      },
      body: {
        margin: 0,
        padding: 0,
        display:"flex",
        flexDirection:"column",
        height:"100vh",
        maxHeight:"100vh",
        bg: "brand.main",
        maxWidth: "100vw",
        // overflow: "auto",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      h1: {
        fontSize: "3.75rem",
      },
      h2: {
        fontSize: "46px",
      },
      h3: {
        fontSize: "24px",
      },
      h4: {
        fontSize: "20px",
      },
      p: {
        fontSize: "15px",
      },
      "input[type='radio']": {
        WebkitAppearance: "none",
      },
    },
  },
  colors: {
    brand,
    title: {
      white: "#d9dde7",
    },
    searchbar: {bg: "#181818", menu: "#333333"},
    card: {
      bg: {
        "dark-blue": "#0b101b",
      },
    },
    footer: {
      bg: "#0E1118",
    },
    navbar: {
      bg: "#0E1118",
      border: "#161A23",
    },
    black: {
      dominant: "#2D2D2D",
    },
    border: {
      "card-light": "#1e2430",
      "badge-light": "#323439",
    },
    badge: {
      border: "#353c4c",
      text: "#d2d2d2",
      body: "#192130",
    },
    bg: {
      black: "#000000",
      purple: "#0b101b",
      blueDark: "#181E29",
    },
    gray: {
      title: "#9a9ca1",
      medium: "#9a9ca1",
      soft: "#292b2f",
      high: "#191919",
    },
    divider: "#3e4453",
    title: {
      white: "#d9dde7",
    },
    searchbar: {bg: "#181818", menu: "#333333"},
    border: {
      "card-light": "#1e2430",
      "badge-light": "#323439",
    },
    badge: {
      border: "#353c4c",
      text: "#d2d2d2",
      body: "#192130",
    },
    purple: {
      dominant: "#460bf9",
      black: "#050712",
    },
  },
  gradients: {
    gradient: {
      BlueAndWhite:
        "linear-gradient(180deg, rgba(255, 255, 255, 0) 0.23%, rgba(251, 251, 253, 0.0185308) 0.24%, #302DB7 55.7%, rgba(238, 238, 254, 0.231347) 100%)",
      GreenAndWhite:
        "linear-gradient(180deg, rgba(255, 255, 255, 0) 0.23%, rgba(251, 251, 253, 0.0185308) 0.24%, #007644 55.7%, rgba(76, 175, 80, 0.231347) 100%)",
      PurpleAndBlue: "linear-gradient(90deg, #4E2286 0%, #0035FD 64.06%)",
      Green:
        " linear-gradient(180deg, rgba(255, 255, 255, 0) 0.23%, rgba(251, 251, 253, 0.0185308) 0.24%, #007644 55.7%, rgba(238, 238, 254, 0.231347) 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      BlueToGreen:
        "linear-gradient(270.05deg, #007644 -0.02%, rgba(78, 34, 134, 0) 159.12%), linear-gradient(0deg, #3B2A70, #3B2A70)",
      BlueToPurple:
        "linear-gradient(270.05deg, #222E98 -0.02%, rgba(78, 34, 134, 0) 159.12%), linear-gradient(0deg, #3B2A70, #3B2A70)",
      PurpleBlueGreen: "linear-gradient(90deg, #4E2286 0%, #007644 64.06%)",
      PurpleToBlue: "linear-gradient(167.15deg, #865FFF -0.84%, #37425A 13.62%, #37425A 98.3%)",
    },
  },
  components: {
    Button,
    Input,
    Card,
    Badge,
    Link,
    Stepper,
  },
  textStyles: Text,
  fontSizes: {
    xs: "15px",
    sm: "20px",
    md: "24px",
    lg: "46px",
    xl: "3.75rem",
  },
});

export default main;
