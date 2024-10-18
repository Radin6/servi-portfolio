import Link from "next/link";
import {useEffect} from "react";
import {CloseButton, Slide, useMediaQuery} from "@chakra-ui/react";

import Links from "./Links";

import {useSidebar} from "@/store/useSidebar";
import {Box, Button, Flex, Text, VStack} from "@/components/chakra-client/components";
import ServiLogo from "@/components/ServiLogo/ServiLogo";

const Sidebar = () => {
  const [isXL] = useMediaQuery("(min-width: 1600px)");
  const {showSidebar, setShowSidebar, isDesktop, setIsDesktop} = useSidebar((state) => state);

  useEffect(() => {
    setIsDesktop(isXL);
  }, [isXL]);

  const handleCloseSlide = (evt) => {
    evt.target.id === "slide" && setShowSidebar(false);
  };

  return (
    <>
      <Slide
        direction="left"
        id="slide"
        in={isDesktop ? true : showSidebar}
        style={{zIndex: 100, width: isDesktop ? "214px" : "100vw"}}
        onClick={(evt) => handleCloseSlide(evt)}
      >
        <Flex
          as="aside"
          bg="brand.main"
          flexDir="column"
          height="100vh"
          id="aside"
          left="0"
          overflowY="auto"
          pb="1.5rem"
          position="sticky"
          pt="14px"
          px="1rem"
          top="0"
          w="214px"
        >
          <VStack align="left">
            <Box display="flex" justifyContent="space-between" mb="1rem">
              <Link href="/buyer">
                <ServiLogo />
              </Link>
              {!isXL && (
                <CloseButton color="white" size="md" onClick={() => setShowSidebar(false)} />
              )}
            </Box>

            <Box>
              <Links />
            </Box>
          </VStack>
        </Flex>
      </Slide>
    </>
  );
};

export default Sidebar;
