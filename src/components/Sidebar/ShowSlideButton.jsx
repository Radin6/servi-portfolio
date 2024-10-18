"use client";
import {HamburgerIcon} from "@chakra-ui/icons";

import {Box} from "@/components/chakra-client/components";

const ShowSlideButton = () => {

  return (
    <Box
      _hover={{cursor: "pointer"}}
      mr={{md: "1rem"}}
      onClick={() => setShowSidebar(!showSidebar)}
    >
      <HamburgerIcon
        _hover={{color: "gray.500"}}
        color="white"
        h={8}
        style={{transition: "color .1s linear"}}
        w={8}
      />
    </Box>
  );
};

export default ShowSlideButton;
