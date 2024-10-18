"use client";
import {useState} from "react";

import ShowSlideButton from "../Sidebar/ShowSlideButton";

import {Button, Box, Flex, Spacer} from "@/components/chakra-client/components";

export default function NavbarResponsive({children, logo}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      as="header"
      background="bg.purple"
      display={{md: "none", lg: "none"}}
      height="auto"
      minWidth={"100%"}
      position="sticky"
      top="0"
      width="100%"
      zIndex="90"
    >
      <Flex alignItems="center" justifyContent="space-between" px="24px" py="16px" w="100%">
        <ShowSlideButton />
        {logo}
        <Box w="fit-content">
          <Flex alignItems="center" justify="center">
              <Button
                marginRight="2.5"
                variant="rounded"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen && (
                  <span
                    className="material-symbols-outlined closeIcon"
                    style={{color: "var(--bg-color)", fontSize: 24}}
                  >
                    close
                  </span>
                )}
                {!isOpen && (
                  <span
                    className="material-symbols-outlined"
                    style={{color: "var(--bg-color)", fontSize: 24}}
                  >
                    menu
                  </span>
                )}
              </Button>
          </Flex>
        </Box>
      </Flex>

      {isOpen && <NavbarResponsiveMenu>{children}</NavbarResponsiveMenu>}
    </Box>
  );
}

export function NavbarResponsiveMenu(props) {
  return (
    <Flex
      as="nav"
      bg="bg.purple"
      borderBottomColor="gray.soft"
      borderBottomStyle="solid"
      borderBottomWidth=".5px"
      direction="column"
      flexDirection="column"
      gap="24px"
      left="0"
      padding="24px 32px"
      position="absolute"
      top="99%"
      transition=".15s ease "
      w="100%"
      zIndex="500"
      {...props}
    >
      {props.children}
    </Flex>
  );
}
