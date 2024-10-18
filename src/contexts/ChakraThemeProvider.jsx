"use client";

import {ChakraProvider} from "@chakra-ui/react";

import main from "@/theme/index";
export default function ChakraThemeProvider({children}) {
  return <ChakraProvider theme={main}>{children}</ChakraProvider>;
}
