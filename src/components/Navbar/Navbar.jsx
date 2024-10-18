"use client";

import NextLink from "next/link";
import {Link} from "@chakra-ui/react";

import ShowSlideButton from "@/components/Sidebar/ShowSlideButton";
import {Container, Box, Flex} from "@/components/chakra-client/components";

export function NavbarLink({children, value = null, ...props}) {

  return (
    <Box textColor={"gray"} fontWeight={"semibold"}>
      {!value && children}
      {value && value}
    </Box>
  );
}

export function NavbarElement(props) {
  return (
    <Box p="0" {...props}>
      {props.children}
    </Box>
  );
}

export default function Navbar(props) {

  return (
    <Container
      as="header"
      backdropFilter="blur(6px)"
      background="navbar.bg"
      borderBottomColor="navbar.border"
      borderBottomWidth=".5px"
      minWidth="100%"
      p="0"
      position="sticky"
      top="0"
      width="100%"
      zIndex="50"
    >
      <Box
        alignItems="center"
        as="nav"
        display={{base: "none", md: "flex"}}
        justifyContent="center"
        padding="24px 32px"
        {...props}
      >
        <Flex alignItems="center" flexWrap="nowrap" maxWidth="1200px" width="100%">
          <ShowSlideButton />
          {props.logo}
          {props.children}
        </Flex>
      </Box>
    </Container>
  );
}
